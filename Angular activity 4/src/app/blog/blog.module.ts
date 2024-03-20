import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogListComponent } from './pages/blog-list/blog-list.component';
import { BlogItemComponent } from './pages/blog-item/blog-item.component';
import { BlogRoutingModule } from './blog-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../shared/components/shared.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    BlogListComponent,
    BlogItemComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
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
export class BlogModule { }
