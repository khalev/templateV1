import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PetitionsComponent } from './petitions/petitions.component';



const routes: Routes = [
  { path: 'petitions', component: PetitionsComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
