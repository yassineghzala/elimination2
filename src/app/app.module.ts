import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './Homepage/homepage/homepage.component';
import { HomesubjectComponent } from './Homepage/SubjectComponent/homesubject/homesubject.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HomesubjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
