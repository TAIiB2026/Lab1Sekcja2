import { InjectionToken } from "@angular/core";
import { PeopleRepsitoryInterface } from "../interfaces/people-repository.interface";

export const PEOPLE_REPSITORY_TOKEN = 
    new InjectionToken<PeopleRepsitoryInterface>("PEOPLE_REPSITORY_TOKEN");