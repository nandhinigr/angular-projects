import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewserviceService}  from './newservice.service';
import { ParentfileComponent } from './parentfile/parentfile.component';
import { ChildfileComponent } from './childfile/childfile.component';
import { AppRoutingModule } from './app-routing.module'
@NgModule({
  declarations: [
    AppComponent,
    ParentfileComponent,
    ChildfileComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [NewserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
