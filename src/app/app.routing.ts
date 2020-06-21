import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './components/Landing/landing.component';
import { AboutUsComponent } from './components/AboutUs/aboutus.component';
import { OurWorkComponent } from './components/OurWork/ourWork.component';
import { ContactUsComponent } from './components/ContactUs/contactus.component';
import { ServicesComponent } from './components/Services/services.component';
import { CareersComponent } from './components/Careers/careers.component';
import { MissionComponent } from './components/Mission/mission.component';


const routes: Routes = [

    { path: '', component: LandingComponent },
    { path: 'aboutUs', component: AboutUsComponent },
    { path: 'ourWork', component: OurWorkComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'contactUs', component: ContactUsComponent },
    { path: 'careers', component: CareersComponent },
    { path: 'mission', component: MissionComponent}

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
