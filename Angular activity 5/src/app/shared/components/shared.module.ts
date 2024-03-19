import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommandBarComponent } from './command-bar/command-bar.component';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [CommandBarComponent],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports:[CommandBarComponent]
})
export class SharedModule { }
