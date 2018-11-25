import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { NewserviceService}  from './newservice.service';
import { ParentfileComponent } from './parentfile/parentfile.component';
import { ChildfileComponent } from './childfile/childfile.component';

const routes: Routes[] = [
{path: 'parent', component: ParentfileComponent},
{path: 'child', component:  ChildfileComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
