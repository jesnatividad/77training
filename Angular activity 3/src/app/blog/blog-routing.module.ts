import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogListComponent } from './pages/blog-list/blog-list.component';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {
    path:'',
    component: BlogListComponent,
    
  }, 
  {
    path:'bookList',
    component: BlogListComponent,
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

export class BlogRoutingModule { }
