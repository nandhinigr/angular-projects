import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { UserService  } from './shared/user.service';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
   RouterModule.forRoot( AppRoutingModule)

  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
