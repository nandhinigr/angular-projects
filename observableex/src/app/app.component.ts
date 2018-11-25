import { Component, OnInit } from '@angular/core';
import { SearchserviceService}  from './searchservice.service';
import { IUser } from './IUser';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
 
  title = 'observableex';

  protected users: Observable<IUser[]>;

  constructor(public userservice: SearchserviceService){}


  ngOnInit()
  {
  this.userservice.getUsers().subscribe(res => 
  {
  this.users= res;
  });
  }
  }
