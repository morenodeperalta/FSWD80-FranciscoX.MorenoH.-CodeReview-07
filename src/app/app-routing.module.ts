import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutUsComponent } from './about-us/about-us.component';
import { BoliviaComponent } from './bolivia/bolivia.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { CountriesComponent } from './countries/countries.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ArgentinaComponent } from './argentina/argentina.component';
import { BrasilComponent } from './brasil/brasil.component';
import { IntranetpageComponent } from './intranetpage/intranetpage.component';


const routes: Routes = [
{
	path:"", component: LandingpageComponent
},
{
	path:"bolivia",component: BoliviaComponent
},
{
	path:"Justus", component: AboutUsComponent
},
{
	path:"home", component: CountriesComponent
},
{
	path:"contactUs", component: ContactUsComponent
},
{
	path:"argentina", component: ArgentinaComponent
},
{
	path:"brasil", component: BrasilComponent
},
{
	path:"intranet", component: IntranetpageComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
