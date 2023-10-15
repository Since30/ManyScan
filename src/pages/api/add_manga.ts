import { NextApiRequest, NextApiResponse } from 'next';
import bodyParser from 'body-parser';
import sqlite3 from 'sqlite3';

const jsonParser = bodyParser.json();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
   
    const { title, author, genre } = req.body;


    const db = new sqlite3.Database('/usr/src/app/path/to/database.sqlite');
    db.run(
        `
            INSERT INTO Mangas (title, author, genre)
            VALUES (?, ?, ?)
        `,
        [title, author, genre],
        function (this: sqlite3.RunResult, err: Error | null) {
            if (err) {
                return console.error(err.message);
            }
            console.log(`Ligne insérée avec l'ID : ${this.lastID}`);
        }
    );
    db.close();

    if (!title || !author || !genre) {
      res.status(400).json({ message: 'Tous les champs sont obligatoires' });
      return;
    }

    res.status(200).json({ message: 'Manga ajouté avec succès' });
  } else {
    res.status(405).json({ message: 'Méthode non autorisée' });
  }
}
