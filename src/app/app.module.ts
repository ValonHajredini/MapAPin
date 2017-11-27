import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { AgmCoreModule } from '@agm/core';
// import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBpufEn6SzwJvjU6muwkbyhVe_VLMBuMw4'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
