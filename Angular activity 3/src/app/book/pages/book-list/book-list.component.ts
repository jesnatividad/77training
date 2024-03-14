import { Component } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})

export class BookListComponent {
  bookArr: Book[] =[];
  constructor(private bookService: BookService){
    this.bookArr = bookService.getBooks();
  }

  
 editBook = (bookId: number) =>{
  console.log("editBook")
  console.log(bookId);

 }

 deleteBook = (bookId: number) =>{
  let index: number = 0;
   this.bookArr.forEach(book=>{
    if(book.id===bookId){
      this.bookArr.splice(index,1);
    }
    index++;
   })
 }

}
