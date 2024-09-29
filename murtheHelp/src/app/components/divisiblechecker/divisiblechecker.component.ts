import { Component } from '@angular/core';

@Component({
  selector: 'app-divisiblechecker',
  templateUrl: './divisiblechecker.component.html',
  styleUrl: './divisiblechecker.component.css'
})
export class DivisiblecheckerComponent {
  resultMessage: string = ''; 

  checkDivisibility(num1: string, num2: string) {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    if (number2 === 0) {
      this.resultMessage = "The second number cannot be zero.";
    } else if (number1 % number2 === 0) {
      this.resultMessage = `${number1} is divisible by ${number2}.`;
    } else {
      this.resultMessage = `${number1} is not divisible by ${number2}.`;
    }
  }
}
