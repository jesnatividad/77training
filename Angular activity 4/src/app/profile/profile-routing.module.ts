import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewProfileComponent } from './pages/new-profile/new-profile.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path:'',
    component: NewProfileComponent
    
  }, 
  {
    path:'new-profile',
    component: NewProfileComponent,
    
  }  
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProfileRoutingModule { }
