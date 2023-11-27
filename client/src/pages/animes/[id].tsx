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
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        if (router.isReady) {
            const  id  = router.query.id;

            const fetchMangaData = async () => {
                if (typeof id === 'string') {
                    try {
                        const response = await fetch(`https://api.mangadex.org/manga/${id}`);
                        if (!response.ok) {
                            throw new Error(`Error fetching manga: ${response.statusText}`);
                        }
                        const data = await response.json();

                        const authorRel = data.data.relationships.find((rel: Relationship) => rel.type === 'author');
                        const coverRel = data.data.relationships.find((rel: Relationship) => rel.type === 'cover_art');
                        const coverUrl = coverRel && coverRel.attributes && coverRel.attributes.fileName ? `https://uploads.mangadex.org/covers/${data.data.id}/${coverRel.attributes.fileName}` : undefined;

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

            fetchMangaData();
        }
    }, [router.isReady, router.query]);

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
            </div>
        </div>
    );
};

export default MangaDetailPage;




// import React, { useEffect } from 'react';
// import { GetServerSideProps } from 'next';

// interface Manga {
//   id: string;
//     title: string;
//     description?: string;
// }
  


// interface Chapter {
//   id: string;
//   title: string;
// }

// interface Props {
//   manga: Manga;
//   chapters: Chapter[];
// }

// const MangaDetail: React.FC<Props> = ({ manga, chapters }: Props) => {


//     return (
//         <div>
//         <h1>{manga.title}</h1>
//         <p>{manga.description}</p>
//         <ul>
//             {chapters.map((chapter) => (
//             <li key={chapter.id}>
//                 <a href={`/chapters/${chapter.id}`}>{chapter.title}</a>
//             </li>
//             ))}
//         </ul>
//         </div>
//     );
// };

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const { id } = context.params as { id: string } ;
//   console.log("Params: ", context.params );

//   // Fetch manga details
//   const mangaResponse = await fetch(`https://api.mangadex.org/manga/${id}`);
//   const mangaData = await mangaResponse.json();
//   const manga: Manga = {
//     id: mangaData.data.id,
//     title: mangaData.data.attributes.title.en, // Assume English title
//     description: mangaData.data.attributes.description.en, // Assume English description
//   };

//   // Fetch chapters for this manga
//   const chaptersResponse = await fetch(`https://api.mangadex.org/manga/${id}/feed?limit=500&translatedLanguage[]=en&order[chapter]=asc`);
//   const chaptersData = await chaptersResponse.json();
//   const chapters: Chapter[] = chaptersData.data.map((chapterData: any) => ({
//     id: chapterData.id,
//     title: `Chapter ${chapterData.attributes.chapter}: ${chapterData.attributes.title}`,
//   }));

//   return {
//     props: { manga, chapters },
//   };
// };

// export default MangaDetail;
