import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule ,FormsModule } from "@angular/forms";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { environment } from "../environments/environment";
import { TravelComponent } from './travel/travel.component';
import { TravelListComponent } from './travel-list/travel-list.component';
import { TravelService } from "./shared/travel.service";
import { LandingpageComponent } from './landingpage/landingpage.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { JumbotronContactUsComponent } from './jumbotron-contact-us/jumbotron-contact-us.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { JumbotronAboutUsComponent } from './jumbotron-about-us/jumbotron-about-us.component';
import { ArgentinaComponent } from './argentina/argentina.component';
import { JumbotronArgentinaComponent } from './jumbotron-argentina/jumbotron-argentina.component';
import { BoliviaComponent } from './bolivia/bolivia.component';
import { JumbotronBoliviaComponent } from './jumbotron-bolivia/jumbotron-bolivia.component';
import { BrasilComponent } from './brasil/brasil.component';
import { JumbotronBrasilComponent } from './jumbotron-brasil/jumbotron-brasil.component';
import { CountriesComponent } from './countries/countries.component';
import { JumbotronCountriesComponent } from './jumbotron-countries/jumbotron-countries.component';
import { ExperienceComponent } from './experience/experience.component';
import { ExperienceListComponent } from './experience-list/experience-list.component';
import { IntranetpageComponent } from './intranetpage/intranetpage.component';
import { ExperienceService } from "./shared/experience.service";

@NgModule({
  declarations: [
    AppComponent,
    TravelComponent,
    TravelListComponent,
    LandingpageComponent,
    ContactUsComponent,
    JumbotronContactUsComponent,
    NavBarComponent,
    FooterComponent,
    AboutUsComponent,
    JumbotronAboutUsComponent,
    ArgentinaComponent,
    JumbotronArgentinaComponent,
    BoliviaComponent,
    JumbotronBoliviaComponent,
    BrasilComponent,
    JumbotronBrasilComponent,
    CountriesComponent,
    JumbotronCountriesComponent,
    ExperienceComponent,
    ExperienceListComponent,
    IntranetpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [TravelService, ExperienceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
