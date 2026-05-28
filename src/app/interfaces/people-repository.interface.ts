import { Observable } from "rxjs";
import { PersonClass } from "../classes/person.class";

export interface PeopleRepsitoryInterface {
    Post(name: string, surnae: string, dateOfBirth: Date): Observable<boolean>;
    Get(): Observable<PersonClass[]>;
    GetByID(id: number): Observable<PersonClass>;
}