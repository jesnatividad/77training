import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../../models/book';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent {
  @Input() book: Book | undefined;
  @Output() deleteActionEmitter = new EventEmitter<Book>();
  @Output() editActionEmitter = new EventEmitter<Book>();
  
  editBook = () =>{
    this.editActionEmitter.emit(this.book);
  }

  
  deleteBook = () =>{
    this.deleteActionEmitter.emit(this.book);
  }
}
