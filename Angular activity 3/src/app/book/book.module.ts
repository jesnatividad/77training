import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './pages/book-list/book-list.component';
import { BookRoutingModule } from './book-routing.module';
import {MatCardModule} from '@angular/material/card'; 
import {MatButtonModule} from '@angular/material/button'; 
import { BookItemComponent } from './pages/book-item/book-item.component';

@NgModule({
  declarations: [
    BookListComponent,
    BookItemComponent    
  ],
  imports: [
    CommonModule,
    BookRoutingModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class BookModule { }
