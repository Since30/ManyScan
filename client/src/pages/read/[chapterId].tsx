import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const ChapterReaderPage = () => {
  const router = useRouter();
  const { chapterId } = router.query;
  const [chapterImages, setChapterImages] = useState<{ url: string; language: string }[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [readingMode, setReadingMode] = useState('horizontal');
  const [currentPage, setCurrentPage] = useState(0);

  const toggleReadingMode = () => {
    setReadingMode(readingMode === 'horizontal' ? 'vertical' : 'horizontal');
  };

  const goToNextPage = () => {
    if (currentPage < chapterImages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    const chapterId ='516f3d88-513d-4820-9aa7-77e818003ee2'
    
    const fetchChapterImages = async () => {
      if (typeof chapterId === 'string') {
        try {
          const response = await fetch(`https://api.mangadex.org/at-home/server/${chapterId}`);
          const data = await response.json();
          console.log(data);

          if (data.result === 'ok') {
            const baseUrl = data.baseUrl;
            const chapterHash = data.chapter.hash;
            const pageFilenames = data.chapter.data;
            const language = data.chapter.translatedLanguage;

            const imageUrls = pageFilenames.map((filename: string) => ({
              url: `${baseUrl}/data/${chapterHash}/${filename}`,
              language: language || 'Langue inconnue',
            }));
            
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
    <div className="flex flex-col items-center">
      <div className="w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 relative">
        <button onClick={toggleReadingMode} className="mb-4 p-2 bg-blue-500 text-white rounded">
          {readingMode === 'horizontal' ? 'Passer en mode Webtoon' : 'Passer en mode Manga'}
        </button>

        {readingMode === 'horizontal' ? (
          <>
            <div className="relative">
              <button onClick={goToPreviousPage} disabled={currentPage === 0} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 p-2 rounded">
                &lt;
              </button>
              <img src={chapterImages[currentPage].url} alt={`Page ${currentPage + 1}`} className="w-full" />
              <button onClick={goToNextPage} disabled={currentPage === chapterImages.length - 1} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 p-2 rounded">
                &gt;
              </button>
            </div>
            <div className="flex justify-center mt-4">
              <span>Page {currentPage + 1} sur {chapterImages.length} - Langue: {chapterImages[currentPage].language}</span>
            </div>
          </>
        ) : (
          <div>
            {chapterImages.map((image, index) => (
              <div key={index} className="text-center">
                <img src={image.url} alt={`Page ${index + 1}`} className="w-full" />
                <span className="block mt-1">Langue: {image.language}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChapterReaderPage;

