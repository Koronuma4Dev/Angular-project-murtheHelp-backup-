import { Component } from '@angular/core';

@Component({
  selector: 'app-oddsumcalculator',
  templateUrl: './oddsumcalculator.component.html',
  styleUrl: './oddsumcalculator.component.css'
})
export class OddsumcalculatorComponent {
  sum: number | null = null;

 
  calculateSumOfOddNumbers(n: string) {
    const num = parseInt(n, 10); 
    if (isNaN(num) || num <= 0) {
      this.sum = null; 
      return;
    }

    let total = 0;
    for (let i = 1; i <= num; i++) {
      if (i % 2 !== 0) {
        total += i;
      }
    }

    this.sum = total; 
  }
}
