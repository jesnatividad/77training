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

}
