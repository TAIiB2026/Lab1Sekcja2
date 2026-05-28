import { inject, Injectable } from '@angular/core';
import { PeopleRepsitoryInterface } from './interfaces/people-repository.interface';
import { map, Observable } from 'rxjs';
import { PersonClass } from './classes/person.class';
import { HttpClient } from '@angular/common/http';
import { PersonDTOInterface } from './interfaces/person-dto.interface';

@Injectable()
export class PeopleWebapi implements PeopleRepsitoryInterface {
  private readonly URL = 'http://localhost:5122/api/People';
  private readonly httpClient = inject(HttpClient);


  Post(name: string, surnae: string, dateOfBirth: Date): Observable<boolean> {
    throw new Error('Method not implemented.');
  }

  Get(): Observable<PersonClass[]> {
    return this.httpClient.get<PersonDTOInterface[]>(this.URL)
      .pipe(map(x => x.map(y => {
        const [year, month, date] = y.dateOfBirth.split('-').map(Number);
        const dateOfBith = new Date(year, month - 1, date);
        return new PersonClass(y.id, y.name, y.surname, dateOfBith);
      })));
  }

  GetByID(id: number): Observable<PersonClass> {
    throw new Error('Method not implemented.');
  }
  
}
