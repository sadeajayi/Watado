import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MapPageComponent } from './map-page.component';
import {AgmCoreModule} from "angular2-google-maps/core";
import {MarkerService} from "../../services/marker.service";

@NgModule({
  declarations: [
    MapPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBZTQEJmb21ZuDYnsYtLb4esEUs0fb6C6k'
    })
  ],
  providers: [MarkerService],
  bootstrap: [MapPageComponent]
})
export class MapPageModule { }
