export default interface AnimeObjects {
    id: string;
    title: string;
    description?: string;
    type: string | 'inconnu';
    status: string;
    year: number;
    createAt: string;
    updatedAt: string;
    language: string;
    lastChapter?: string;
    coverId: string;
    coverFileName: string;
    cover: string;
    authorId: string;
    authorName: string;
}
