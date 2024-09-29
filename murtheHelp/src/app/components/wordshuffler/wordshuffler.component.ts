import { Component } from '@angular/core';

@Component({
  selector: 'app-wordshuffler',
  templateUrl: './wordshuffler.component.html',
  styleUrl: './wordshuffler.component.css'
})
export class WordshufflerComponent {
  shuffledWord: string = ''; 


  shuffleWord(word: string) {
    if (word) {
      this.shuffledWord = this.shuffleString(word); 
    } else {
      this.shuffledWord = ''; 
    }
  }

  private shuffleString(str: string): string {
    const array = str.split(''); 
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); 
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array.join(''); 
  }
}
