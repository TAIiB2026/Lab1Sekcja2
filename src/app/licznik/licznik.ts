import { Component, inject } from '@angular/core';
import { LicznikGlobalny } from '../services/licznik-globalny';
import { LicznikLokalny } from '../services/licznik-lokalny';
import { LicznikSterownika } from '../services/licznik-sterownika';

@Component({
  selector: 'app-licznik',
  standalone: false,
  templateUrl: './licznik.html',
  styles: ``,
  providers: [LicznikLokalny]
})
export class Licznik {
  public readonly globalny = inject(LicznikGlobalny);
  public readonly lokalny = inject(LicznikLokalny);
  public readonly sterownik = inject(LicznikSterownika);

  public podniesLicznikLokalny(): void {
    this.lokalny.podniesLicznik();
  }

  public podniesLicznikGlobalny(): void {
    this.globalny.podniesLicznik();
  }

  public podniesLicznikSterownika(): void {
    this.sterownik.podniesLicznik();
  }
}
