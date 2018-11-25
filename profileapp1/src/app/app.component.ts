import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { NewService } from './new.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'profileapp1';

  users: Array<any>;
  display_name;
  constructor(private newservice: NewService) { }
  ngOnInit() {


    this.check();

  }


  check() {
    this
      .newservice
      .getlist()
      .subscribe((data) => {

        this.users = data['user'];
        this.display_name = this.users['display_name'];

        console.log(this.users);


      });
  }
}
