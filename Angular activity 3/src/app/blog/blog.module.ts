import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogListComponent } from './pages/blog-list/blog-list.component';
import { BlogItemComponent } from './pages/blog-item/blog-item.component';
import { BlogRoutingModule } from './blog-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    BlogListComponent,
    BlogItemComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class BlogModule { }
