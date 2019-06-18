import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassComponent } from './class/class.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { DataDisplayComponent } from './data-display/data-display.component';
import { HomeComponent } from './home/home.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassComponent,
    UserDetailsComponent,
    DataDisplayComponent,
    HomeComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
