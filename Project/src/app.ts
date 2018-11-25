//our root app component
import {Component, NgModule, VERSION} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {ChildComponent} from 'src/child.component'

@Component({
  selector: 'my-app',
  template: `
    <child-comp [parentCount]="count"></child-comp>
  `
})
export class App {
  count: number = 10;
}

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ App, ChildComponent ],
  bootstrap: [ App ]
})
export class AppModule {}