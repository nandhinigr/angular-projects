import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TempformsComponent } from './tempforms/tempforms.component';
import { ReactformsComponent } from './reactforms/reactforms.component';
import { AppRoutingModule } from './app-routing.module';
import { ArraytaskComponent } from './arraytask/arraytask.component';
import { ServicetaskComponent } from './servicetask/servicetask.component';
import { ParenttaskComponent } from './parenttask/parenttask.component';
import { ChildtaskComponent } from './childtask/childtask.component'


@NgModule({
 
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
   declarations: [
    AppComponent,
    TempformsComponent,
    ReactformsComponent,
    ArraytaskComponent,
    ServicetaskComponent,
    ParenttaskComponent,
    ChildtaskComponent

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
