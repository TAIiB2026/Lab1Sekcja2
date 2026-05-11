import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formularz',
  standalone: false,
  templateUrl: './formularz.html',
  styles: ``,
})
export class Formularz {
  name: string = 'test';
  surname: string = '';
  dateOfBirth: string = '1990-01-01';


  onSubmit(event: NgForm): void {
    console.log(event.value);
  }

  zeruj(): void {
    this.name = '';
    this.surname = '';
    this.dateOfBirth = '1990-01-01';
  }

  onNameChange(newName: string): void {
    console.log('nowe imię to: ', newName);
  }
}
