import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  result: number | string = '';

  add(num1: string, num2: string): void {
    this.result = this.calculate(num1, num2, 'add');
  }

  subtract(num1: string, num2: string): void {
    this.result = this.calculate(num1, num2, 'subtract');
  }

  multiply(num1: string, num2: string): void {
    this.result = this.calculate(num1, num2, 'multiply');
  }

  divide(num1: string, num2: string): void {
    this.result = this.calculate(num1, num2, 'divide');
  }

  private calculate(num1: string, num2: string, operation: string): number | string {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    if (isNaN(number1) || isNaN(number2)) {
      return 'Please enter valid numbers.';
    }

    switch (operation) {
      case 'add':
        return number1 + number2;
      case 'subtract':
        return number1 - number2;
      case 'multiply':
        return number1 * number2;
      case 'divide':
        return number2 !== 0 ? number1 / number2 : 'Cannot divide by zero.';
      default:
        return '';
    }
  }
}
