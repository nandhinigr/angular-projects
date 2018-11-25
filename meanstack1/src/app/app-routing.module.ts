import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';


export const AppRoutingModule: Routes  = [{

path: 'signup', component:  UserComponent,

children: [{ path: '', component: SignUpComponent }]


}];
