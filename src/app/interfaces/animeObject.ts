// "?" signifie que certaines propriétés peuvent être nulles/optionnelles
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#optional-properties
export default interface AnimeOject {
    img: string,
    title: string,
    author: string,
    type?: string,      
    chapters?: number,
    status?: string,
    language?: string
    synopsis?: string,
}