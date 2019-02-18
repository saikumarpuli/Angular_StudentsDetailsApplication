import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DataDisplayComponent} from "./data-display/data-display.component";
 import {HomeComponent} from "./home/home.component";

 const routes: Routes = [{path : "display" ,component:DataDisplayComponent},
   {path:"home" ,component:HomeComponent}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
