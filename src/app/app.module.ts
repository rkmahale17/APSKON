import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/Toolbar/Toolbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LandingComponent } from './components/Landing/landing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Services
import { NavbarComponent } from './components/Navbar/navbar.component';
import { AppListComponent } from './components/Lists/list.component';
import { AboutUsComponent } from './components/AboutUs/aboutus.component';
import { OurWorkComponent } from './components/OurWork/ourWork.component';
import { ContactUsComponent } from './components/ContactUs/contactus.component';
import { ServicesComponent } from './components/Services/services.component';



@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    LandingComponent,
    NavbarComponent,
    AppListComponent,
    AboutUsComponent,
    OurWorkComponent,
    ContactUsComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
