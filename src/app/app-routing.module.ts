import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MiddleComponent } from './middle/middle.component';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './form/form.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { OurtrainerComponent } from './ourtrainer/ourtrainer.component';
import { WhykComponent } from './whyk/whyk.component';
import { MembershipComponent } from './membership/membership.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { UpdateComponent } from './update/update.component';
import { ContactComponent } from './contact/contact.component';
const routes: Routes = [

  {path:'header',component:HeaderComponent},
  {path:'middle',component:MiddleComponent},
  {path:'footer',component:FooterComponent},
  {path:'form',component:FormComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'ourtrainer',component:OurtrainerComponent},
  {path:'whyk',component:WhykComponent},
  {path:'membership',component:MembershipComponent},
  {path:'home', component: HomeComponent},
  {path:'gallery',component: GalleryComponent},
  {path:'update/:id' ,component:UpdateComponent},
  {path:'contact', component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
