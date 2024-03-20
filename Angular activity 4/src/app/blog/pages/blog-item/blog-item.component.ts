import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Blog } from '../../models/blog';


@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.css']
})
export class BlogItemComponent {
  @Input() blog: Blog | undefined;
  @Output() editActionEmitter = new EventEmitter<Blog>();
  @Output() deleteActionEmitter = new EventEmitter<Blog>();

  editBlog = () => {
    this.editActionEmitter.emit(this.blog);
  }

  deleteBlog = () => {
    this.deleteActionEmitter.emit(this.blog);
  }

  onSubmit(){
    console.log("SUBMIT");
  }
}


