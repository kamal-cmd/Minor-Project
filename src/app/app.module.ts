import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import {FormsModule} from '@angular/forms';
import{ HttpClientModule } from '@angular/common/http';
import { UpdateComponent } from './update/update.component';
import { ContactComponent } from './contact/contact.component';
import { PremComponent } from './prem/prem.component';
import { BirComponent } from './bir/bir.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MiddleComponent,
    FooterComponent,
    FormComponent,
    AboutusComponent,
    ContactusComponent,
    OurtrainerComponent,
    WhykComponent,
    MembershipComponent,
   
    HomeComponent,
   
    GalleryComponent,
   
    UpdateComponent,
   
    ContactComponent,
   
    PremComponent,
   
    BirComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
