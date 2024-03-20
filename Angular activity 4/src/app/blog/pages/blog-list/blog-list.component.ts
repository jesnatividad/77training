import { Component, OnInit } from '@angular/core';
import { Blog } from '../../models/blog';
import { BlogService } from '../../services/blog.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  blogArr: Blog[] = [];
  blogForm: FormGroup;
  isAdd: boolean = false;
  addUpdate: string = "ADD";
  snackBarDuration: number = 5;
  constructor(private blogService: BlogService, private fB: FormBuilder, private _snackBar: MatSnackBar) {
    this.blogForm = fB.group({
      id: [
        { value: '', disabled: false },
        [Validators.required]
      ],
      title: [
        { value: '', disabled: false },
        [Validators.required]
      ],
      description: [
        { value: '', disabled: false },
        [Validators.required]
      ],
      author: [
        { value: '', disabled: false },
        [Validators.required]
      ],
      comments: [
        { value: [''], disabled: false },
        [Validators.required]
      ]
    })

  }
  ngOnInit(): void {
    this.getBlogs();
  }

  getBlogs() {
    this.blogService.getBlogs().subscribe(resp => {
      this.blogArr = resp;

    }, (err) => {
      console.error(err);
    });

  }

  onSubmit() {
    console.log("Submit");
  }

  editBlog = (blog: Blog) => {
    this.addUpdate = "UPDATE";
    this.addBlog(blog);
  }

  addBlog(blog?: Blog) {
    let matSnackBarConfig: MatSnackBarConfig = new MatSnackBarConfig();
    if (blog?.id && this.addUpdate == "UPDATE") {
      this.setblogFormFields(blog);
      this.blogForm.get("id")?.disable();
    }else{
      this.blogForm.get("id")?.enable();
    }
    
    if (this.isAdd) {
      if (this.blogForm.invalid) {

        matSnackBarConfig.duration = 1000;
        this._snackBar.open("Incomplete Data", "OK", matSnackBarConfig,);
      } else {
        if (this.addUpdate === "ADD") {
          this.blogService.addBlog(this.blogForm.getRawValue()).subscribe((res) => {
            this.getBlogs();
            this.resetFormGroup(this.blogForm);
            this._snackBar.open("ADD Success!", "OK", matSnackBarConfig,);
          }, (err) => {
            console.error(err);
          });
        } else if (this.addUpdate === "UPDATE") {
          this.blogService.updateBlog(this.blogForm.getRawValue()).subscribe((res) => {
            this.getBlogs();
            this.resetFormGroup(this.blogForm);
            this._snackBar.open("UPDATE Success!", "OK", matSnackBarConfig,);
            this.addUpdate = "ADD";
          }, (err) => {
            console.error(err);
          });
        }
      }
      this.isAdd = false;

    } else {
      this.isAdd = true;


    }

  }

  deleteBlog = (blogId: number) => {
    this.blogService.deleteBlog(blogId).subscribe((resp) => {
      this.getBlogs();
    }, (err) => {
      console.error(err);
    });
  }

  deleteAll = () => {
    this.blogArr.forEach(blog => {
      this.deleteBlog(blog.id);
    })
  }

  resetFormGroup(formGroup: FormGroup) {
    formGroup.reset();
  }

  setblogFormFields(blog: Blog) {
    this.blogForm.get("id")?.setValue(blog.id);
    this.blogForm.get("title")?.setValue(blog.title);
    this.blogForm.get("description")?.setValue(blog.description);
    this.blogForm.get("author")?.setValue(blog.author);
    this.blogForm.get("comments")?.setValue(blog.comments);
  }

}
