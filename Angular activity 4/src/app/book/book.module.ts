import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './pages/book-list/book-list.component';
import { BookRoutingModule } from './book-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../shared/components/shared.module';
import { BookItemComponent } from './pages/book-item/book-item.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    BookListComponent,
    BookItemComponent,
    
  ],
  imports: [
    CommonModule,
    BookRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatCheckboxModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ]
})
export class BookModule { }
