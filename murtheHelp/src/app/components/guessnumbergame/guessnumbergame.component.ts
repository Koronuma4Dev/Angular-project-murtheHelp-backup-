import { Component } from '@angular/core';

@Component({
  selector: 'app-guessnumbergame',
  templateUrl: './guessnumbergame.component.html',
  styleUrl: './guessnumbergame.component.css'
})
export class GuessnumbergameComponent {
  randomNumber: number = Math.floor(Math.random() * 100) + 1;
  message: string = '';

  checkGuess(): void {
    const inputElement = document.getElementById('guessInput') as HTMLInputElement;
    const userGuess = parseInt(inputElement.value);

    if (!isNaN(userGuess)) {
      if (userGuess > this.randomNumber) {
        this.message = 'Too high! Try again.';
      } else if (userGuess < this.randomNumber) {
        this.message = 'Too low! Try again.';
      } else {
        this.message = `Congratulations! You've guessed the number ${this.randomNumber}.`;
      }
    } else {
      this.message = 'Please enter a valid number!';
    }

    inputElement.value = ''; 
  }
}
