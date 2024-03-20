import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})

export class BookListComponent implements OnInit {

 
  bookArr: Book[] = [];
  bookForm: FormGroup;
  isAdd: boolean = false;
  addUpdate: string = "ADD";
  snackBarDuration: number = 5;
  constructor(private bookService: BookService, private fB: FormBuilder, private _snackBar: MatSnackBar) {
    this.bookForm = fB.group({
      id: [
        { value: '', disabled: false },
        [Validators.required]
      ],
      name: [
        { value: '', disabled: false },
        [Validators.required]
      ],
      authors: [
        { value: [''], disabled: false },
        [Validators.required]
      ],
      isbn: [
        { value: '', disabled: false },
        [Validators.required]
      ]
    })

  }
  ngOnInit(): void {
    this.getBooks();
  }

  getBooks() {
    this.bookService.getBooks().subscribe(resp => {
      this.bookArr = resp;

    }, (err) => {
      console.error(err);
    });

  }

  onSubmit() {
    console.log("Submit");
  }

  editBook = (book: Book) => {
    this.addUpdate = "UPDATE";
    this.addBook(book);
  }

  addBook(book?: Book) {
    let matSnackBarConfig: MatSnackBarConfig = new MatSnackBarConfig();
    
    if (book?.id && this.addUpdate == "UPDATE") {
      this.setbookFormFields(book);
      this.bookForm.get("id")?.disable();
    }else{
      this.bookForm.get("id")?.enable();
    }
    
    if (this.isAdd) {
      if (this.bookForm.invalid) {

        matSnackBarConfig.duration = 1000;
        this._snackBar.open("Incomplete Data", "OK", matSnackBarConfig,);
      } else {
        if (this.addUpdate === "ADD") {
          this.bookService.addBook(this.bookForm.getRawValue()).subscribe((res) => {
            this.getBooks();
            this.resetFormGroup(this.bookForm);
            this._snackBar.open("ADD Success!", "OK", matSnackBarConfig,);
          }, (err) => {
            console.error(err);
          });
        } else if (this.addUpdate === "UPDATE") {
          this.bookService.updateBook(this.bookForm.getRawValue()).subscribe((res) => {
            this.getBooks();
            this.resetFormGroup(this.bookForm);
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

  deleteBook = (bookId: number) => {
    this.bookService.deleteBook(bookId).subscribe((resp) => {
      this.getBooks();
    }, (err) => {
      console.error(err);
    });
  }

  deleteAll = () => {
    this.bookArr.forEach(book => {
      this.deleteBook(book.id);
    })
  }

  resetFormGroup(formGroup: FormGroup) {
    formGroup.reset();
  }

  setbookFormFields(book: Book) {
    this.bookForm.get("id")?.setValue(book.id);
    this.bookForm.get("name")?.setValue(book.name);
    this.bookForm.get("authors")?.setValue(book.authors);
    this.bookForm.get("isbn")?.setValue(book.isbn);
  }
}
