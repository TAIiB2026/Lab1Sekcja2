import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { People } from "./people/people";
import { Person } from "./person/person";

const routes: Routes = [
    { path: '', component: People },
    { path: ':id', component: Person },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class PeopleRoutingModule { }