import { Component, OnInit } from '@angular/core';
import {FullserviceService}  from '../fullservice.service';

@Component({
  selector: 'app-servicetask',
  templateUrl: './servicetask.component.html',
  styleUrls: ['./servicetask.component.css']
})
export class ServicetaskComponent implements OnInit {
records = {}

constructor(private myfirstservice : FullserviceService ){


}
	


  ngOnInit(){
this.records = this.myfirstservice.getData()

  }
}