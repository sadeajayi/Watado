import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FacebookModule } from 'ngx-facebook';
import { FormControl , FormsModule, ReactiveFormsModule} from "@angular/forms";

import { AgmCoreModule } from '@agm/core';


const appRoutes: Routes = [

  {path:'', component: HomeComponent},
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path: 'map-page', component: MapPageComponent},
  {path: 'about', component: AboutComponent},
  {path: 'meet-the-team', component: MeetTheTeamComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'middle-section', component: MiddleSectionComponent},
  {path: 'main-section', component: MainSectionComponent}
  
]

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { MapPageComponent } from './components/map-page/map-page.component';
import { AboutComponent } from './components/about/about.component';
import { MeetTheTeamComponent } from './components/meet-the-team/meet-the-team.component';
import { FooterComponent } from './components/footer/footer.component';
import { MiddleSectionComponent } from './components/middle-section/middle-section.component';
import { MainSectionComponent } from './components/main-section/main-section.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    MapPageComponent,
    AboutComponent,
    MeetTheTeamComponent,
    FooterComponent,
    MiddleSectionComponent,
    MainSectionComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    FacebookModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDQ5I8N8B_YQoG535XH5R6rhdCLH3DC9mk',
      libraries: ["places"]
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
