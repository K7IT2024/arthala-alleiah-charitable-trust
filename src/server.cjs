const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const crypto = require('crypto');
const Razorpay = require('razorpay');

const app = express();
const PORT = process.env.PORT || 4000;
const distPath = path.resolve(__dirname, '..', 'dist');

app.use(cors());
app.use(express.json());
app.use(express.static(distPath));

const dbPath = path.join(__dirname, 'volunteers.db');
const db = new sqlite3.Database(dbPath);
const razorpay = process.env.RAZORPAY_KEY_ID && process.env.RAZORPAY_KEY_SECRET
  ? new Razorpay({ key_id: process.env.RAZORPAY_KEY_ID, key_secret: process.env.RAZORPAY_KEY_SECRET })
  : null;

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS volunteers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    note TEXT,
    phone TEXT,
    role TEXT,
    created_at TEXT DEFAULT (datetime('now'))
  )`);
  db.run(`CREATE TABLE IF NOT EXISTS donations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    receipt_number TEXT NOT NULL UNIQUE,
    payment_id TEXT NOT NULL UNIQUE,
    order_id TEXT NOT NULL,
    amount INTEGER NOT NULL,
    donor_name TEXT NOT NULL,
    donor_email TEXT NOT NULL,
    donor_phone TEXT,
    created_at TEXT DEFAULT (datetime('now'))
  )`);

  db.all('PRAGMA table_info(volunteers)', [], (err, cols) => {
    if (err) return;
    const existingColumns = cols.map((col) => col.name);
    if (!existingColumns.includes('phone')) db.run('ALTER TABLE volunteers ADD COLUMN phone TEXT');
    if (!existingColumns.includes('role')) db.run('ALTER TABLE volunteers ADD COLUMN role TEXT');
  });

  app.post('/api/payments/order', async (req, res) => {
    const { amount, donor } = req.body || {};
    if (!razorpay) return res.status(503).json({ error: 'Online payments are not configured yet.' });
    if (!Number.isFinite(amount) || amount < 1) return res.status(400).json({ error: 'Enter a valid donation amount.' });
    if (!donor?.name || !donor?.email || !donor?.phone) return res.status(400).json({ error: 'Donor name, email, and phone are required.' });

    try {
      const order = await razorpay.orders.create({
        amount: Math.round(amount * 100),
        currency: 'INR',
        receipt: `donation_${Date.now()}`,
      });
      return res.json({ keyId: process.env.RAZORPAY_KEY_ID, orderId: order.id, amount: order.amount, currency: order.currency });
    } catch (error) {
      return res.status(502).json({ error: 'Unable to create payment order.' });
    }
  });

  app.post('/api/payments/verify', (req, res) => {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, donor, amount } = req.body || {};
    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) return res.status(400).json({ error: 'Incomplete payment response.' });

    const expectedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET || '')
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest('hex');
    if (expectedSignature !== razorpay_signature) return res.status(400).json({ error: 'Payment signature verification failed.' });

    const receiptNumber = `AACT-${Date.now()}`;
    db.run(
      'INSERT INTO donations (receipt_number, payment_id, order_id, amount, donor_name, donor_email, donor_phone) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [receiptNumber, razorpay_payment_id, razorpay_order_id, Math.round(Number(amount) * 100), donor.name, donor.email, donor.phone],
      (error) => {
        if (error) return res.status(500).json({ error: 'Unable to generate donation receipt.' });
        return res.json({ receiptNumber, receiptUrl: `/api/payments/receipt/${receiptNumber}` });
      }
    );
  });

  app.get('/api/payments/receipt/:receiptNumber', (req, res) => {
    db.get('SELECT * FROM donations WHERE receipt_number = ?', [req.params.receiptNumber], (error, donation) => {
      if (error || !donation) return res.status(404).send('Receipt not found.');
      res.type('html').send(`<!doctype html><html><head><meta charset="utf-8"><title>Donation Receipt ${donation.receipt_number}</title><style>body{font-family:Arial;max-width:680px;margin:40px auto;color:#183b32}main{border:1px solid #d8dfda;padding:32px;border-radius:16px}h1{color:#1b5e46}p{line-height:1.6}.amount{font-size:28px;font-weight:700}</style></head><body><main><h1>Arthala Alleiah Charitable Trust</h1><p>Official donation receipt</p><p><strong>Receipt:</strong> ${donation.receipt_number}</p><p><strong>Donor:</strong> ${donation.donor_name}</p><p><strong>Email:</strong> ${donation.donor_email}</p><p><strong>Payment ID:</strong> ${donation.payment_id}</p><p class="amount">INR ${(donation.amount / 100).toFixed(2)}</p><p>Thank you for supporting our charitable work.</p><button onclick="window.print()">Print / Save as PDF</button></main></body></html>`);
    });
  });
});

app.get('/api/volunteers', (req, res) => {
  db.all('SELECT id, name, email, phone, role, note, created_at FROM volunteers ORDER BY created_at DESC', [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

app.post('/api/volunteers', (req, res) => {
  const { name, email, phone, role, note } = req.body;
  if (!name || !email) return res.status(400).json({ error: 'Name and email are required' });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  const stmt = db.prepare('INSERT INTO volunteers (name, email, phone, role, note) VALUES (?, ?, ?, ?, ?)');
  stmt.run(name, email, phone || '', role || '', note || '', function (err) {
    if (err) return res.status(500).json({ error: err.message });
    db.get('SELECT id, name, email, phone, role, note, created_at FROM volunteers WHERE id = ?', [this.lastID], (err, row) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json(row);
    });
  });
});

app.get('*', (req, res, next) => {
  if (req.path.startsWith('/api/')) return next();
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Volunteer API and web app running on http://0.0.0.0:${PORT}`);
});
