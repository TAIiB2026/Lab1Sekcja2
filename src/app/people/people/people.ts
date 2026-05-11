import { Component } from '@angular/core';
import { PersonClass } from '../../classes/person.class';
import { PeopleRepositoryService } from '../../people-repository';

@Component({
  selector: 'app-people',
  standalone: false,
  templateUrl: './people.html',
  styles: ``,
})
export class People {
  public people: PersonClass[] = [];

  constructor(peopleRepository: PeopleRepositoryService) {
    this.people = peopleRepository.get();
  }

  public trackPersonBy(index: number, obj: PersonClass): number {
    return obj.id;
  }

  public calculateAge(person: PersonClass): number {
    const currentDate = new Date(Date.now());
    console.log('calculateAge');
    return currentDate.getFullYear() - person.dateOfBirth.getFullYear();
  }
}