import { Component } from '@angular/core';
import { LicznikSterownika } from '../services/licznik-sterownika';

@Component({
  selector: 'app-sterownik-licznika',
  standalone: false,
  templateUrl: './sterownik-licznika.html',
  styles: ``,
  providers: [LicznikSterownika]
})
export class SterownikLicznika {}
