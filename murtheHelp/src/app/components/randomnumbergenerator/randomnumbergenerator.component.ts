import { Component } from '@angular/core';

@Component({
  selector: 'app-randomnumbergenerator',
  templateUrl: './randomnumbergenerator.component.html',
  styleUrl: './randomnumbergenerator.component.css'
})
export class RandomnumbergeneratorComponent {
  randomNumber: number = 0;


  generateRandomNumber() {
    const min = 1; 
    const max = 1000;
    this.randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
