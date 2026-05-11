import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SterownikLicznika } from './sterownik-licznika/sterownik-licznika';
import { Formularz } from './formularz/formularz';

const routes: Routes = [
  {
    path: 'osoby', loadChildren: () => import('./people/people-module').then(x => x.PeopleModule),
  }, 
  {
    path: '' , redirectTo: 'osoby', pathMatch: 'full'
  },
  {
    path: 'sterownik-licznika', component: SterownikLicznika
  },
  {
    path: 'formularz', component: Formularz
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
