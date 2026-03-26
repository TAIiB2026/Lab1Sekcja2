import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appMyDirectove]',
  standalone: false,
})
export class MyDirectove implements OnInit {
  @HostBinding('style.color') public styleColor!: string;

  @Input('appMyDirectove') color?: string;

  @HostListener('mouseenter') public mouseenter(): void {
    this.styleColor = 'black';
  }

  @HostListener('mouseleave') public mouseleave(): void {
    this.styleColor = this.color ? this.color : 'red';
  }

  constructor() {
    console.log(this.color, 'constructor');
  }

  ngOnInit(): void {
    console.log(this.color, 'OnInit');
    this.styleColor = this.color ? this.color : 'red';
  }
}
