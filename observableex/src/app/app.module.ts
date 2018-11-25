import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SearchserviceService}  from './searchservice.service';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import {filter } from  'rxjs/operators';

@NgModule({
  declarations: [
   
    AppComponent ],
  
  imports: [
    BrowserModule,
    HttpClientModule],
 
  providers: [SearchserviceService],
  bootstrap: [AppComponent]
})

export class AppModule {}
