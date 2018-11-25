import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tempforms',
  templateUrl: './tempforms.component.html',
  styleUrls: ['./tempforms.component.css']
})


export class TempformsComponent {

  model: any = {};

  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
    console.log(this.model.select);
  }
}





