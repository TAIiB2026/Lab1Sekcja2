import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: 'osoby', loadChildren: () => import('./people/people-module').then(x => x.PeopleModule),
}, {
  path: '' , redirectTo: 'osoby', pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
