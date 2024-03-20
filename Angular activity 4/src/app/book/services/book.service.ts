import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  baseUrl: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {
  }
  getBooks ():Observable<Book[]>  {
    return this.http.get<Book[]>(`${this.baseUrl}/books`);
  }

  addBook(Book:Book): Observable<Book> {
    return this.http.post<Book>(`${this.baseUrl}/books`,Book);
    
  }

  deleteBook(BookId: number){
    return this.http.delete(`${this.baseUrl}/books/${BookId}`);
  }

  updateBook(Book:Book){
    return this.http.put<Book>(`${this.baseUrl}/books/${Book.id}`,Book);
  }
}
