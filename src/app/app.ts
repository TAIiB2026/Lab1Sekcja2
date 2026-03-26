import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styles: []
})
export class App {
  protected readonly title = 'lab1';
  public counter: number = 0;
  public componentsList: string[] = ['pierwszy', 'drugi', 'trzeci', 'czwarty'];
  public inputValue?: string;
  public canDelete = true;

  getDoubleTitle(): string {
    return this.title + ' - ' + this.title;
  }

  get doubleTitle(): string {
    return this.getDoubleTitle();
  }

  onCounterUpdated(): void {
    let newCounter = this.counter;
    newCounter += 1;
    this.counter = newCounter;
  }

  onAddClick(): void {
    if(this.inputValue) {
      this.componentsList.push(this.inputValue);
      this.inputValue = undefined;
    } else {
      const newItem = 'Komponent nr ' + this.componentsList.length;
      this.componentsList.push(newItem);
    }
  }

  onDelete(event: string): void {
    this.componentsList = this.componentsList.filter(x => x !== event);
  }
}
