import { Component } from '@angular/core';

@Component({
  selector: 'app-factorialcalculator',
  templateUrl: './factorialcalculator.component.html',
  styleUrl: './factorialcalculator.component.css'
})
export class FactorialcalculatorComponent {
  factorialResult: number | string = '';

  calculateFactorial(): void {
    const inputElement = document.getElementById('numberInput') as HTMLInputElement;
    const inputValue = parseInt(inputElement.value);

    if (!isNaN(inputValue) && inputValue >= 0) {
      this.factorialResult = this.factorial(inputValue);
    } else {
      this.factorialResult = 'Please enter a valid non-negative number.';
    }
  }

  factorial(num: number): number {
    if (num === 0 || num === 1) {
      return 1;
    } else {
      return num * this.factorial(num - 1);
    }
  }
}
