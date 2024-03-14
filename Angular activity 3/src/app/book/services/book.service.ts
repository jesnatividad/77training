import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  booksArr: Book[] = [];

  constructor() {
    this.booksArr.push(new Book(1,"Book1", ["William","Joey"],"12124512c"));
    this.booksArr.push(new Book(2,"Book2", ["William","Jay"],"12124512d"));
    this.booksArr.push(new Book(3,"Book3", ["Jay","Joey"],"12124512e"));
    this.booksArr.push(new Book(4,"Book4", ["William"],"12124512f"));
    this.booksArr.push(new Book(5,"Book5", ["Jay"],"12124512g"));
    this.booksArr.push(new Book(6,"Book6", ["Joey"],"12124512h"));
  }
  getBooks = () => {
    return this.booksArr;
  }

}
