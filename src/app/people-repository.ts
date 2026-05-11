import { Injectable } from '@angular/core';
import { PersonClass } from './classes/person.class';

@Injectable({
  providedIn: 'root',
})
export class PeopleRepositoryService {
  private repo: PersonClass[] = [
    new PersonClass(1, "Jan", "Kowalski", new Date(1990, 2, 30)),
    new PersonClass(2, "Adam", "Nowak", new Date(1986, 3, 10)),
    new PersonClass(3, "Anna", "Iksińska", new Date(1995, 10, 2)),
    new PersonClass(4, "Natalia", "Kowalska", new Date(1966, 4, 14)),
    new PersonClass(5, "Jan", "Igrekowy", new Date(2005, 1, 11)),
  ];

  public get(): PersonClass[] {
    return this.repo.map(r => new PersonClass(r.id, r.name, r.surname, r.dateOfBirth));
  }

  public getByID(id: number) {
    const obj = this.repo.find(r => r.id === id);
    if(obj) {
      return new PersonClass(obj.id, obj.name, obj.surname, obj.dateOfBirth);
    }

    throw new Error("Nie odnaleziono osoby o id = " + id);
  }
}
