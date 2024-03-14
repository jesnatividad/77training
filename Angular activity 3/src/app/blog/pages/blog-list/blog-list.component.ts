import { Component } from '@angular/core';
import { Blog } from '../../models/blog';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent {

  blogArr: Blog[] = [];

  constructor(private blogService: BlogService){
    this.blogArr = blogService.getBlogs();
  }

  editBlog = (blogId: number) =>{
    console.log("editBlog")
    console.log(blogId);
  
   }
  
   deleteBlog = (blogId: number) =>{
    let index: number = 0;
     this.blogArr.forEach(blog=>{
      if(blog.id===blogId){
        this.blogArr.splice(index,1);
      }
      index++;
     })
   }
}
