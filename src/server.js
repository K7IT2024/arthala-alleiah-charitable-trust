const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

const dbPath = path.join(__dirname, 'volunteers.db');
const db = new sqlite3.Database(dbPath);

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS volunteers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    note TEXT,
    created_at TEXT DEFAULT (datetime('now'))
  )`);
});

app.get('/api/volunteers', (req, res) => {
  db.all('SELECT id, name, email, note, created_at FROM volunteers ORDER BY created_at DESC', [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

app.post('/api/volunteers', (req, res) => {
  const { name, email, note } = req.body;
  if (!name || !email) return res.status(400).json({ error: 'Name and email are required' });

  const stmt = db.prepare('INSERT INTO volunteers (name, email, note) VALUES (?, ?, ?)');
  stmt.run(name, email, note || '', function (err) {
    if (err) return res.status(500).json({ error: err.message });
    db.get('SELECT id, name, email, note, created_at FROM volunteers WHERE id = ?', [this.lastID], (err, row) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json(row);
    });
  });
});

app.listen(PORT, () => {
  console.log(`Volunteer API running on http://localhost:${PORT}`);
});
