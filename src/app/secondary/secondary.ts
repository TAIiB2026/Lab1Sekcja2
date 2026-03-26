import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-secondary',
  standalone: false,
  templateUrl: './secondary.html',
  styles: ``,
})
export class Secondary {
  @Input() public title!: string;
  @Input() public canDelete!: boolean;
  public counter: number = 0;
  @Output() counterUpdated = new EventEmitter<void>();
  @Output() delete = new EventEmitter<string>();

  updateCounter(): void {
    this.counter++;
    this.counterUpdated.emit();
  }

  onDeleteClick(): void {
    this.delete.emit(this.title);
  }
}
