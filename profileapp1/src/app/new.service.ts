import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NewService {

  constructor( private http: HttpClient) { }

  getlist() {

return this.http.get('https://api.behance.net/v2/users/mark?client_id=E4rFEqSFCwuUt7tdclbpZjxrB74wX2Oj');
  }
}
