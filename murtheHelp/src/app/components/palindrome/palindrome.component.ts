import { Component } from '@angular/core';

@Component({
  selector: 'app-palindrome',
  templateUrl: './palindrome.component.html',
  styleUrl: './palindrome.component.css'
})
export class PalindromeComponent {
  isPalindrome: boolean | null = null;  

  
  onWordInput(event: Event): void {
    const inputWord = (event.target as HTMLInputElement).value.trim().toLowerCase();
    
    
    if (inputWord) {
      this.isPalindrome = inputWord === inputWord.split('').reverse().join('');
    } else {
      this.isPalindrome = null;  
    }
  }
}
