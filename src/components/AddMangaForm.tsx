"use client"
import React, { useState } from 'react';

const AddMangaForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch('/api/add_manga', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, author, genre }),
    });

    if (response.ok) {
      console.log('Manga ajouté avec succès');
    } else {
      console.error('Erreur lors de l\'ajout du manga');
    }
  };

  return (
    <form onSubmit={handleSubmit} action="/pages/api/add_manga" method='post'>
      <input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder="Titre" 
        required 
      />
      <input 
        type="text" 
        value={author} 
        onChange={(e) => setAuthor(e.target.value)} 
        placeholder="Auteur" 
        required 
      />
      <input 
        type="text" 
        value={genre} 
        onChange={(e) => setGenre(e.target.value)} 
        placeholder="Genre" 
        required 
      />
      <button type="submit">Ajouter Manga</button>
    </form>
  );
};

export default AddMangaForm;
