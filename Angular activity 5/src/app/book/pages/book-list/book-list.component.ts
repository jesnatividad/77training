import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})

export class BookListComponent implements OnInit{
  bookArr: Book[] =[];
  
  constructor(private bookService: BookService){
    
  }
  ngOnInit(): void {
     this.bookService.getBooks().subscribe((resp)=>{
      this.bookArr = resp;
    },(err)=>{
      console.error(err);
      
    })
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

 deleteAll = () =>{
  this.bookArr = [];
 }
}
