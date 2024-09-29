import { Component } from '@angular/core';

@Component({
  selector: 'app-wordcounter',
  templateUrl: './wordcounter.component.html',
  styleUrl: './wordcounter.component.css'
})
export class WordcounterComponent {
  wordCount: number = 0;

  countWords(): void {
    const inputElement = document.getElementById('textInput') as HTMLTextAreaElement;
    const text = inputElement.value.trim();
    
    if (text) {
      this.wordCount = text.split(/\s+/).length; 
    } else {
      this.wordCount = 0;
    }
  }
}
