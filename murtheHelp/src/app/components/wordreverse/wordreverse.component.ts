import { Component } from '@angular/core';

@Component({
  selector: 'app-wordreverse',
  templateUrl: './wordreverse.component.html',
  styleUrl: './wordreverse.component.css'
})
export class WordreverseComponent {
  reversedWord: string = '';

  reverseWord(word: string): void {
    this.reversedWord = word.split('').reverse().join('');
}
}