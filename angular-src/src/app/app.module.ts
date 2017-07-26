import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [

  {path:'', component: HomeComponent},
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path: 'map-page', component: MapPageComponent},
  {path: 'about', component: AboutComponent},
  {path: 'meet-the-team', component: MeetTheTeamComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'middle-section', component: MiddleSectionComponent}
  
]

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { MapPageComponent } from './components/map-page/map-page.component';
import { AboutComponent } from './components/about/about.component';
import { MeetTheTeamComponent } from './components/meet-the-team/meet-the-team.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { MiddleSectionComponent } from './components/middle-section/middle-section.component';

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
    ContactComponent,
    FooterComponent,
    MiddleSectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
