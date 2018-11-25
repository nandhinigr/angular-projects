import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
import { TempformsComponent } from './tempforms/tempforms.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    ReactiveformsComponent,
    TempformsComponent
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }