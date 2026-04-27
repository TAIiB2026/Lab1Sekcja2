import { Pipe, PipeTransform } from '@angular/core';
import { PersonClass } from '../classes/person.class';

@Pipe({
  name: 'age',
  standalone: false,
})
export class AgePipe implements PipeTransform {
  transform(value: PersonClass): number {
    const currentDate = new Date(Date.now());
    console.log('calculateAge - pipe');
    return currentDate.getFullYear() - value.dateOfBirth.getFullYear();
  }
}
