import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-childfiles',
 
  templateUrl: './childfiles.component.html',
  styleUrls: ['./childfiles.component.css']
})
export class ChildfilesComponent  {
@Input() greetMessage: string = "child to parent";
@Output() msgevent = new EventEmitter<string>();
constructor(){}

sendMessage(){
	
	this.msgevent.emit(this.greetMessage)
}

}
