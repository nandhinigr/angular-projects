import { Component } from '@angular/core';
import { ChildfilesComponent } from './childfiles/childfiles.component';
@Component({
  selector: 'app-root',
  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parenrchildtask';

  message : string = "I am Parent";
  childmessage : string = "I am passed from Parent to child component"
   receiveMessage($event) {
    this.message = $event
  }
}

