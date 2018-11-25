import { Component } from '@angular/core';

import { NewserviceService}  from './newservice.service'
import { ParentfileComponent } from './parentfile/parentfile.component';
import { ChildfileComponent } from './childfile/childfile.component'

@Component({
  selector: 'app-root',
  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
records = {}

constructor(private myfirstservice : NewserviceService ){


}
	


  ngOnInit(){
this.records = this.myfirstservice.getData()

  }
}
