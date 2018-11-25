import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// tslint:disable-next-line:max-line-length]
import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { NewsApiService } from './news-api.service';
import { TimeAgoPipe } from 'time-ago-pipe';

@NgModule({
  declarations: [
    AppComponent,
    TimeAgoPipe
  ],
  imports: [
    BrowserModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,

  ],
  providers: [NewsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
