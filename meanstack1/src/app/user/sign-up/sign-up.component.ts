import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private userservice: UserService ) { }

  ngOnInit() {
  }

}
