export type Book = {
    id: number,
    title: string,
    isExpand: boolean,
    pages: Page[],
    chapters: Chapter []
}

export type Chapter = {
    id: number,
    title: string,
    isExpand: boolean,
    pages: Page[],
    sections: Section[]
}

export type Section = {
    id: number,
    title: string,
    isExpand: boolean,
    pages: Page[]
}

export type Page = {
    id: number,
    title: string,
    url: string
}