import { Observable } from "rxjs";

export interface PeopleRepsitoryInterface {
    Post(name: string, surnae: string, dateOfBirth: Date): Observable<boolean>;
}