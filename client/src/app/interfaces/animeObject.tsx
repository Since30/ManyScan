export default interface AnimeObject{
    id: number,
    img: string,
    title: string,
    author: string,
    type?: string,      
    chapters?: number,
    status?: string,
    language?: string
    synopsis?: string,
}

