import { BlogInterface } from "./blog.interface";

export class Blog implements BlogInterface{
    id: number;
    title: string;
    description: string;
    author: string;
    comments: string[];

    constructor(id: number, title: string, description: string, author: string, comments: string[]){
        this.id = id;
        this.title = title;
        this.description = description;
        this.author = author;
        this.comments = comments;
    }
}
