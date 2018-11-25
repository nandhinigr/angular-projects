import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { User } from './user.model';
import { HttpClientModule } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  selectedUser: User = {

fullName: '',
email: '',
password: ''

  };
  constructor(private http: HttpClient) { }

postUser( user: User){
this.http.post(,user)

}


}
