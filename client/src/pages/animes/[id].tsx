'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

interface MangaDetailProps {
    id: string;
    title: string;
    description?: string;
    author?: string;
    coverUrl?: string;
    status: string;
    chapters?: number;
}

interface Relationship {
    type: string;
    attributes?: {
        name?: string;
        fileName?: string;
    };
}

const MangaDetailPage: React.FC = () => {
    const [manga, setManga] = useState<MangaDetailProps | null>(null);
    const [chapters, setChapters] = useState<any[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [selectedLanguage, setSelectedLanguage] = useState('fr')
  
    const router = useRouter();

    useEffect(() => {
        if (router.isReady) {
            const  id  = router.query.id;

            const fetchMangaData = async () => {
                if (typeof id === 'string') {
                  try {
                    const response = await fetch(`https://api.mangadex.org/manga/${id}?includes[]=cover_art`);
                    if (!response.ok) {
                      throw new Error(`Error fetching manga: ${response.statusText}`);
                    }
                    const data = await response.json();
              
                    const authorRel = data.data.relationships.find((rel: Relationship) => rel.type === 'author');
                    const coverRel = data.data.relationships.find((rel: Relationship) => rel.type === 'cover_art');
                    
                    // Utilisez l'identifiant du manga et le nom de fichier de la couverture pour construire l'URL
                    const mangaId = data.data.id;
                    const coverFilename = coverRel.attributes.fileName;
                    const coverUrl = `https://uploads.mangadex.org/covers/${mangaId}/${coverFilename}.256.jpg`; // pour une vignette de 256px de large
                    
                    const mangaDetails: MangaDetailProps = {
                                        id: data.data.id,
                                        title: data.data.attributes.title.en,
                                        description: data.data.attributes.description.en,
                                        author: authorRel?.attributes?.name,
                                        coverUrl: coverUrl,
                                        status: data.data.attributes.status,
                                        chapters: data.data.attributes.totalChapterCount,
                                    };
                    setManga(mangaDetails);
                  } catch (err) {
                    console.error(err);
                    setError("Une erreur est survenue lors de la récupération des détails du manga.");
                  }
                }
              };
              
            const fetchChapters = async () => {
              const id = router.query.id;
                if (typeof id === 'string') {
                  try {
                  
                    // const response = await fetch(`https://api.mangadex.org/manga/${id}/feed?translatedLanguage[]=fr&translatedLanguage[]=en&order[chapter]=asc`,{
                      const response = await fetch(`https://api.mangadex.org/manga/${id}/feed?translatedLanguage[]=${selectedLanguage}&order[chapter]=asc`,{
                      headers: {
                        // Si nécessaire, ajoutez des en-têtes ici, par exemple pour l'authentification ou spécifier le type de contenu.
                      },
                    });
              
                    if (!response.ok) {
                      console.error(`Error fetching chapters: ${response.statusText}`);
                      return;
                    }
              
                    const chaptersData = await response.json();
                    
                   
                    const chaptersArray = chaptersData.data;
              
                    if (Array.isArray(chaptersArray) && chaptersArray.length > 0) {
                      setChapters(chaptersArray.map((chapter: any) => ({
                        id: chapter.id,
                        title: chapter.attributes.title,
                        chapterNumber: chapter.attributes.chapter,
                        language: chapter.attributes.translatedLanguage
                      })));
                    } else {
                      setChapters([]);
                    }
                  } catch (err) {
                    console.error(err);
                  
                  }
                }
              };
            fetchChapters();

            fetchMangaData();
        }
    }, [router.isReady, router.query, selectedLanguage]);

    if (error) {
        return <div>Erreur : {error}</div>;
    }

    if (!manga) {
        return <div>Chargement...</div>;
    }

    return (
        <div className="bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white min-h-screen">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <button onClick={() => router.back()} className="mb-12 text-sm px-4 py-2 rounded shadow bg-gray-200 dark:bg-gray-600">
              Retour
            </button>
            <div className="mb-4">
                    <button
                        onClick={() => setSelectedLanguage('fr')}
                        className={`mr-2 px-4 py-2 rounded ${selectedLanguage === 'fr' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                    >
                        Français
                    </button>
                    <button
                        onClick={() => setSelectedLanguage('en')}
                        className={`px-4 py-2 rounded ${selectedLanguage === 'en' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                    >
                        Anglais
                    </button>
                </div>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
              <div className="md:col-span-1">
                {manga.coverUrl ? (
                  <img src={manga.coverUrl} alt={`Couverture de ${manga.title}`} className="shadow-lg rounded" />
                ) : (
                  <p>Pas de couverture disponible.</p>
                )}
              </div>
              <div className="md:col-span-2 lg:col-span-3">
                <h1 className="text-3xl font-extrabold mb-6">{manga.title}</h1>
                <p>{manga.description || 'Description non disponible.'}</p>
                <p><strong>Auteur :</strong> {manga.author || 'Non spécifié'}</p>
                <p><strong>Status :</strong> {manga.status}</p>
                <p><strong>Chapitres :</strong> {manga.chapters ? manga.chapters : 'Non spécifié'}</p>
              </div>
            </div>
            {chapters.length > 0 && (
              <div>
                <button
                  onClick={() => router.push(`/read/${chapters[0].id}`)}
                  className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
                >
                  Commencer à lire
                </button>
                {chapters.length > 0 && (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Chapitres Disponibles:</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white dark:bg-gray-700 shadow-md rounded-lg overflow-hidden">
                <thead className="bg-blue-500 dark:bg-blue-700 text-white">
                  <tr>
                    <th className="text-left py-3 px-4 uppercase font-semibold text-sm">N° Chapitre</th>
                    <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Titre</th>
                    <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Langue</th>
                    <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Lire</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 dark:text-gray-400">
                  {chapters.map((chapter) => (
                    <tr key={chapter.id} className="border-b border-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">
                      <td className="py-3 px-4">{chapter.chapterNumber}</td>
                      <td className="py-3 px-4">{chapter.title || 'Titre non disponible'}</td>
                      <td className="py-3 px-4">{chapter.language || 'Langue inconnue'}</td>
                      <td className="py-3 px-4">
                        <a href={`/read/${chapter.id}`} className="text-blue-600 dark:text-blue-300 hover:underline">Lire</a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
      
    )}
    </div>
    </div>
    );
}
  


export default MangaDetailPage;

