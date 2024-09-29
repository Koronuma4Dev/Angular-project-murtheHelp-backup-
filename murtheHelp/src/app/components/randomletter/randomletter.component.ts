import { Component } from '@angular/core';

@Component({
  selector: 'app-randomletter',
  templateUrl: './randomletter.component.html',
  styleUrl: './randomletter.component.css'
})
export class RandomletterComponent {

randomLetter ='';

  generateRandomLetter(){

  
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const randomIndex = Math.floor(Math.random() * alphabet.length);
  this.randomLetter  = alphabet[randomIndex];
}

}


