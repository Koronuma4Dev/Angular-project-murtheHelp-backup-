import { Component } from '@angular/core';

@Component({
  selector: 'app-fibonaccigenerator',
  templateUrl: './fibonaccigenerator.component.html',
  styleUrl: './fibonaccigenerator.component.css'
})
export class FibonaccigeneratorComponent {
  fibonacciSequence: number[] = []; 

  generateFibonacci(n: string) {
    const num = parseInt(n, 10); 
    if (isNaN(num) || num <= 0) {
      this.fibonacciSequence = [];
      return;
    }

    this.fibonacciSequence = this.calculateFibonacci(num); 
  }


  calculateFibonacci(n: number): number[] {
    const sequence: number[] = [0, 1];
    for (let i = 2; i < n; i++) {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence.slice(0, n); 
  }
}
