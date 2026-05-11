import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SterownikLicznika } from './sterownik-licznika/sterownik-licznika';

const routes: Routes = [
  {
    path: 'osoby', loadChildren: () => import('./people/people-module').then(x => x.PeopleModule),
  }, 
  {
    path: '' , redirectTo: 'osoby', pathMatch: 'full'
  },
  {
    path: 'sterownik-licznika', component: SterownikLicznika
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
