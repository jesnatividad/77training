import { Component, EventEmitter, Output } from '@angular/core';
import { BlogListComponent } from 'src/app/blog/pages/blog-list/blog-list.component';

@Component({
  selector: 'app-command-bar',
  templateUrl: './command-bar.component.html',
  styleUrls: ['./command-bar.component.css']
})
export class CommandBarComponent {

  @Output() deleteAllActionEmitter = new EventEmitter<any>();
  
  deleteAll = () =>{
    this.deleteAllActionEmitter.emit();
  }
}
