import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-person',
  standalone: false,
  templateUrl: './person.html',
  styles: ``,
})
export class Person implements OnInit {
  public id!: number;
  public idText!: string;

  private readonly activatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(x => {
      const idOriginal = x['id'];
      this.idText = idOriginal;
      
      const idNumber = +idOriginal;
      if(!isNaN(idOriginal)) {
        this.id = idNumber;
      }
    })
  }
}