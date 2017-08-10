import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NgZone } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FacebookModule } from 'ngx-facebook';
import { FormControl , FormsModule, ReactiveFormsModule} from "@angular/forms";

/*import { AgmCoreModule, AgmMarker } from '@agm/core';*/
import {AgmCoreModule,  MapsAPILoader} from "angular2-google-maps/core";
import {MarkerService} from "./services/marker.service";

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { MapPageComponent } from './components/map-page/map-page.component';
import { AboutComponent } from './components/about/about.component';
import { MeetTheTeamComponent } from './components/meet-the-team/meet-the-team.component';
import { FooterComponent } from './components/footer/footer.component';


import {ValidateService} from './services/validate.service';
import {AuthService} from './services/auth.service';
import {FlashMessagesModule} from 'angular2-flash-messages';
import {AuthGuard} from './guards/auth.guard';

//Importing socket-io services
import { SocketService } from './components/shared/socket.service';

const appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path: 'map-page', component: MapPageComponent },
  {path: 'about', component: AboutComponent},
  {path: 'meet-the-team', component: MeetTheTeamComponent},
  {path: 'footer', component: FooterComponent},
]



@NgModule({
  declarations: [
    AppComponent,
    //NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    MapPageComponent,
    AboutComponent,
    MeetTheTeamComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule,
    FacebookModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBfW8ETNs6vnLAlGqcqHIZg52NI9lupHxM',
      libraries: ["places"]
    })
    
  ],
  providers: [ValidateService,MarkerService, AuthService, AuthGuard, SocketService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}