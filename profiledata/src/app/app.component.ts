import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  country: String = '';
  username: String = '' ;
  city : String = '';

  constructor(private httpClient: HttpClient) { }
 
  getProfile() {
    this.httpClient.get('https://api.behance.net/v2/users/nandhini?client_id=E4rFEqSFCwuUt7tdclbpZjxrB74wX2Oj')
      .subscribe(
        (data: any[]) => {
          console.log(data);
        }
      )
  }

 

}