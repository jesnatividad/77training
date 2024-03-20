import { BookInterface } from "./book.interface";

export class Book implements BookInterface{
    id: number;
    name: string;
    authors: string[];
    isbn: string;

    constructor(id: number, name: string, authors: string[], isbn: string){
        this.id = id;
        this.name = name;
        this.authors = authors;
        this.isbn = isbn;
    }
}
