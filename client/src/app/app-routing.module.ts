import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DataDisplayComponent} from "./data-display/data-display.component";

 const routes: Routes = [{path : "display" ,component:DataDisplayComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
