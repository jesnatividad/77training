import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './pages/book-list/book-list.component';

const routes: Routes = [
  {
    path:'',
    component: BookListComponent,
    
  }, 
  {
    path:'bookList',
    component: BookListComponent,
    pathMatch:'full'
  }  
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class BookRoutingModule { }
