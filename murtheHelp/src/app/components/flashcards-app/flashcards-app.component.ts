import { Component } from '@angular/core';

@Component({
  selector: 'app-flashcards-app',
  templateUrl: './flashcards-app.component.html',
  styleUrl: './flashcards-app.component.css'
})
export class FlashcardsAppComponent {
  flashcards = [
    { question: 'Who is the National hero of the Phillipines', answer: 'Jose Rizal' },
    { question: 'What is 5 + 7?', answer: '12' },
    { question: 'What is the largest planet in our solar system?', answer: 'Jupiter' }
  ];

  currentCardIndex = 0;
  showAnswer = false;

  toggleCard() {
    this.showAnswer = !this.showAnswer;
  }

  nextCard() {
    this.showAnswer = false;
    this.currentCardIndex = (this.currentCardIndex + 1) % this.flashcards.length;
  }
}
