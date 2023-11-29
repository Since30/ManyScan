import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const ChapterReaderPage = () => {
  const router = useRouter();
  const { chapterId } = router.query;
  const [chapterImages, setChapterImages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchChapterImages = async () => {
      if (typeof chapterId === 'string') {
        try {
          const response = await fetch(`https://api.mangadex.org/at-home/server/${chapterId}`);
          const data = await response.json();

          if (data.result === 'ok') {
            const baseUrl = data.baseUrl;
            const chapterHash = data.chapter.hash;
            const pageFilenames = data.chapter.data; // ou data.chapter.dataSaver pour la qualité compressée

            // Déclarez explicitement le type du paramètre 'filename' ici
            const imageUrls = pageFilenames.map((filename: string) => `${baseUrl}/data/${chapterHash}/${filename}`);
            setChapterImages(imageUrls);
          }
        } catch (error) {
          console.error('Error fetching chapter images:', error);
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchChapterImages();
  }, [chapterId]);

  if (isLoading) {
    return <div>Chargement du chapitre...</div>;
  }

  return (
    <div>
      {chapterImages.map((imageUrl, index) => (
        <img key={index} src={imageUrl} alt={`Page ${index + 1}`} className='' />
      ))}
    </div>
  );
};

export default ChapterReaderPage;

