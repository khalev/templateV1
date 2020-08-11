import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router'; // CLI imports router





import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ModalComponent } from './modal/modal.component';
import { PetitionsComponent } from './petitions/petitions.component';

 


const routes: Routes = [
{ path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'apropos', component: AboutComponent },
]; 
// sets up routes constant where you define your routes






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    LayoutComponent,
    HomeComponent,
    AboutComponent,
    ModalComponent,
    PetitionsComponent
  ],
  
  exports: [RouterModule],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
