import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class LicznikGlobalny {
  private readonly licznikSubject = new BehaviorSubject<number>(0);

  public get licznik$(): Observable<number> {
    return this.licznikSubject.asObservable();
  }

  public podniesLicznik(): void {
    this.licznikSubject.next(this.licznikSubject.value + 1);
  }
}
