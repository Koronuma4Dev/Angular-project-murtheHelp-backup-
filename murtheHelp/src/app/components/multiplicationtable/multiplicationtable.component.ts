import { Component } from '@angular/core';

@Component({
  selector: 'app-multiplicationtable',
  templateUrl: './multiplicationtable.component.html',
  styleUrl: './multiplicationtable.component.css'
})
export class MultiplicationtableComponent {
  multiplicationTable: string[] = [];

  generateTable(numberValue: string): void {
    const number = parseInt(numberValue, 10);
    this.multiplicationTable = [];

    if (!isNaN(number)) {
      for (let i = 1; i <= 10; i++) {
        this.multiplicationTable.push(`${number} x ${i} = ${number * i}`);
      }
    } else {
      this.multiplicationTable.push('Please enter a valid number.');
    }
  }
}
