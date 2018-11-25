import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { AboutItemComponent } from './about/about-item/about-item.component';
import { AboutHomeComponent } from './about/about-home/about-home.component';

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  declarations: [AppComponent, AboutComponent, HomeComponent, AboutItemComponent, AboutHomeComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
