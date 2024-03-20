import { Injectable } from '@angular/core';
import { Blog } from '../models/blog';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  baseUrl: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {
  }
  getBlogs(): Observable<Blog[]> {

    return this.http.get<Blog[]>(`${this.baseUrl}/blogs`);

  }

  addBlog(blog:Blog): Observable<Blog> {
    return this.http.post<Blog>(`${this.baseUrl}/blogs`,blog);
    
  }

  deleteBlog(blogId: number){
    return this.http.delete(`${this.baseUrl}/blogs/${blogId}`);
  }

  updateBlog(blog:Blog){
    return this.http.put<Blog>(`${this.baseUrl}/blogs/${blog.id}`,blog);
  }
}
