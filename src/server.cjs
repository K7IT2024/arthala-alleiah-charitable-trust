const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const PORT = process.env.PORT || 4000;
const distPath = path.resolve(__dirname, '..', 'dist');

app.use(cors());
app.use(express.json());
app.use(express.static(distPath));

const dbPath = path.join(__dirname, 'volunteers.db');
const db = new sqlite3.Database(dbPath);

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

  db.all('PRAGMA table_info(volunteers)', [], (err, cols) => {
    if (err) return;
    const existingColumns = cols.map((col) => col.name);
    if (!existingColumns.includes('phone')) db.run('ALTER TABLE volunteers ADD COLUMN phone TEXT');
    if (!existingColumns.includes('role')) db.run('ALTER TABLE volunteers ADD COLUMN role TEXT');
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
