import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { People } from './people/people';
import { PeopleRoutingModule } from './people-routing-module';
import { AgePipe } from './age-pipe';
import { Person } from './person/person';

@NgModule({
  declarations: [People, AgePipe, Person],
  imports: [CommonModule, PeopleRoutingModule],
})
export class PeopleModule {}
