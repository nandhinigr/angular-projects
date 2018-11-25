import { Component } from '@angular/core';
import { MyComponent } from './my.component';

@Component({
  selector: 'my-app',
  template: `<input type="text" [style.width]="w" value="Text with 100% width" />
    <my></my>
  `,
  directives: [MyComponent]
})
export class AppComponent {
  private w: string = "100%"
  }


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/