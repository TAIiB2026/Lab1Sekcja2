import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PEOPLE_REPSITORY_TOKEN } from '../tokens/people-repsitory.token';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formularz',
  standalone: false,
  templateUrl: './formularz.html',
  styles: ``,
})
export class Formularz {
  private readonly service = inject(PEOPLE_REPSITORY_TOKEN);
  private readonly router = inject(Router);

  name: string = 'test';
  surname: string = '';
  dateOfBirth: string = '1990-01-01';


  onSubmit(event: NgForm): void {
    console.log(event.value);

    const dateOfBirth = new Date(event.value['dateOfBirth']);

    this.service.Post(event.value['name'], event.value['surname'], dateOfBirth).subscribe({
      next: (res) => {
        if(res) {
          this.router.navigateByUrl('osoby');
        } else {
          alert("Nie udało się dodać nowej osoby");
        }
      }
    });
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
