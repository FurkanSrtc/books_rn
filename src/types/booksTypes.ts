export interface Author {
    name: string;
    birth_year: number;
    death_year: number;
}

export interface Translator {
    name: string;
    birth_year?: number;
    death_year?: number;
}

export interface Book {
    id: number;
    title: string;
    authors: Author[];
    translators: Translator[];
    subjects: string[];
    bookshelves: string[];
    languages: string[];
    copyright: boolean;
    media_type: string;
    formats: Formats;
    download_count: number;
    detail?: string;
}

export interface Formats {
    "text/plain; charset=utf-8": string;
    "application/zip": string;
    "image/jpeg": string;
    "text/html; charset=utf-8": string;
    "text/html": string;
    "application/x-mobipocket-ebook": string;
    "application/rdf+xml": string;
    "application/epub+zip": string;
    "text/plain": string;
    "text/plain; charset=us-ascii": string;
    "application/octet-stream": string;
    "text/html; charset=us-ascii": string;
    "text/html; charset=iso-8859-1": string;
}

export interface BooksObject {
    count: number;
    next: string;
    previous?: any;
    results: Book[];
}