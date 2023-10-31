const db = require("")

app.get("/api/animes", (req, res) => {
  const query = "SELECT * FROM animes";
  db.all(query, (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ animes: rows });
  });
});
app.get("/api/animes/:id", (req, res) => {
  const query = "SELECT * FROM animes WHERE id = ?";
  db.get(query, [req.params.id], (err, row) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ anime: row });
  });
});
app.put("/api/animes/:id", (req, res) => {
  const updateQuery = `
      UPDATE animes
      SET img = ?, title = ?, author = ?, type = ?, chapters = ?, status = ?, language = ?, synopsis = ?
      WHERE id = ?
    `;

  const values = [
    req.body.img,
    req.body.title,
    req.body.author,
    req.body.type,
    req.body.chapters,
    req.body.status,
    req.body.language,
    req.body.synopsis,
    req.params.id,
  ];

  db.run(updateQuery, values, function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: "Anime mis à jour", changes: this.changes });
  });
});
app.delete("/api/animes/:id", (req, res) => {
  const deleteQuery = "DELETE FROM animes WHERE id = ?";
  db.run(deleteQuery, [req.params.id], function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: "Anime supprimé", changes: this.changes });
  });
});
