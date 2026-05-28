import { ChangeDetectorRef, Component, inject, Inject, OnDestroy } from '@angular/core';
import { PersonClass } from '../../classes/person.class';
import { PeopleRepositoryService } from '../../people-repository';
import { Observable, Subscription } from 'rxjs';
import { PEOPLE_REPSITORY_TOKEN } from '../../tokens/people-repsitory.token';
import { PeopleRepsitoryInterface } from '../../interfaces/people-repository.interface';

@Component({
  selector: 'app-people',
  standalone: false,
  templateUrl: './people.html',
  styles: ``,
})
export class People implements OnDestroy {
  public people: PersonClass[] = [];

  public loading = true;

  private readonly cdr = inject(ChangeDetectorRef);

  // public people$: Observable<PersonClass[]>;

  constructor(@Inject(PEOPLE_REPSITORY_TOKEN) peopleRepository: PeopleRepsitoryInterface) {
    // this.people$ = peopleRepository.Get();
    const people$ = peopleRepository.Get();
    const sub: Subscription = people$.subscribe({
      next: (res) => {
        this.people = res;
        this.loading = false;
        const pierwsza = res[0];
        console.log('next', res);
        console.log('pierwsza.getName()', pierwsza.getName());
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.log('error', err);
      },
      complete: () => {
        console.log('complete');
      }
    });

    // sub.unsubscribe();
  }

  ngOnDestroy(): void {
    //Wyłączanie subskrypcji
    //throw new Error('Method not implemented.');
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