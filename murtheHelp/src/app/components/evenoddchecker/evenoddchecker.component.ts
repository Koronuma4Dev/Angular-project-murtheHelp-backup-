import { Component } from '@angular/core';

@Component({
  selector: 'app-evenoddchecker',
  templateUrl: './evenoddchecker.component.html',
  styleUrl: './evenoddchecker.component.css'
})
export class EvenoddcheckerComponent {
  result: string = '';

  checkEvenOdd(inputValue: string): void {
    const number = parseInt(inputValue, 10);
    if (isNaN(number)) {
      this.result = 'Please enter a valid number.';
    } else {
      this.result = number % 2 === 0 ? 'Even' : 'Odd';
    }
  }

}
