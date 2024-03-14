import { Injectable } from '@angular/core';
import { Blog } from '../models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  blogArr: Blog[] = [];

  constructor() {
    this.blogArr.push(new Blog(1,"Blog1","Blog1","John",["Hey Blog 1"]));
    this.blogArr.push(new Blog(2,"Blog2","Blog2","John",["Hey Blog 2"]));
    this.blogArr.push(new Blog(3,"Blog3","Blog3","John",["Hey Blog 3"]));
    this.blogArr.push(new Blog(4,"Blog4","Blog4","John",["Hey Blog 4"]));
    this.blogArr.push(new Blog(5,"Blog5","Blog5","John",["Hey Blog 5"]));
    this.blogArr.push(new Blog(6,"Blog6","Blog6","John",["Hey Blog 6"]));
  }
  getBlogs = () => {
    return this.blogArr;
  }
}
