import { Component, OnInit } from '@angular/core';
import { Blog } from '../../models/blog';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  blogArr: Blog[] = [];

  constructor(private blogService: BlogService) {

  }
  ngOnInit(): void {
    this.blogService.getBlogs().subscribe(resp => {
      this.blogArr = resp;
    }, (err) => {
      console.error(err);
    });

  }

  editBlog = (blogId: number) => {
    console.log("editBlog")
    console.log(blogId);

  }

  deleteBlog = (blogId: number) => {
    let index: number = 0;
    this.blogArr.forEach(blog => {
      if (blog.id === blogId) {
        this.blogArr.splice(index, 1);
      }
      index++;
    })
  }

  deleteAll = () => {
    console.log("Delete all blog");
    this.blogArr = [];
  }
}
