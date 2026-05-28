import { Injectable } from '@angular/core';
import { PersonClass } from './classes/person.class';
import { PeopleRepsitoryInterface } from './interfaces/people-repository.interface';
import { Observable, of } from 'rxjs';

@Injectable()
export class PeopleRepositoryService implements PeopleRepsitoryInterface {
  private repo: PersonClass[] = [
    new PersonClass(1, "Jan", "Kowalski", new Date(1990, 2, 30)),
    new PersonClass(2, "Adam", "Nowak", new Date(1986, 3, 10)),
    new PersonClass(3, "Anna", "Iksińska", new Date(1995, 10, 2)),
    new PersonClass(4, "Natalia", "Kowalska", new Date(1966, 4, 14)),
    new PersonClass(5, "Jan", "Igrekowy", new Date(2005, 1, 11)),
  ];

  public Get(): Observable<PersonClass[]> {
    const res = this.repo.map(r => new PersonClass(r.id, r.name, r.surname, r.dateOfBirth));
    return of(res);
  }

  public GetByID(id: number): Observable<PersonClass> {
    const obj = this.repo.find(r => r.id === id);
    if(obj) {
      const res = new PersonClass(obj.id, obj.name, obj.surname, obj.dateOfBirth);
      return of(res);
    }

    throw new Error("Nie odnaleziono osoby o id = " + id);
  }

  Post(name: string, surnae: string, dateOfBirth: Date): Observable<boolean> {
    if(this.repo.length >= 10) {
      return of(false);
    }

    const newID = Math.max(...this.repo.map(x => x.id)) + 1;
    const newObj = new PersonClass(newID, name, surnae, dateOfBirth);
    this.repo.push(newObj);
    return of(true);
  }
}
