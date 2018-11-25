import { Component } from '@angular/core';
import {HTTP_PROVIDERS} from "@angular/http";
import {AutoCompleteDirective} from "./index";
import {AutoCompleteComponent} from "./index";
@Component({
  selector: 'my',
  template: `<h1>My Component</h1>
  <div style="width: 100%">
    <input style="width: 100%"
      ng2-auto-complete
      [(ngModel)]="model4"
      placeholder="Enter Address(min. 2 chars)"
      [source]="googleGeoCode" 
      display-property-name="formatted_address"
      path-to-data="results"
      min-chars="2" 
      />selected: {{model4 | json}}
    </div>
  `,
  directives: [AutoCompleteDirective],
  providers: [HTTP_PROVIDERS]
})
export class MyComponent {
  public model4;
  public googleGeoCode: string = "https://maps.googleapis.com/maps/api/geocode/json?address=:keyword";
  }
