import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TempformsComponent } from './tempforms/tempforms.component';
import { ReactformsComponent } from './reactforms/reactforms.component';
import { ArraytaskComponent } from './arraytask/arraytask.component';
import { ServicetaskComponent } from './servicetask/servicetask.component'
const routes: Routes = [
{ path: '', redirectTo:'/react', pathMatch: 'full' },
{ path: 'react', component: ReactformsComponent },
{ path:'temp', component: TempformsComponent},
{ path:'arrayss', component: ArraytaskComponent },
{ path:'services', component: ServicetaskComponent }

];

@NgModule({
  
    
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  
  
})
export class AppRoutingModule { }



