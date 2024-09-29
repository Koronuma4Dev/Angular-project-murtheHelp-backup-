import { Component } from '@angular/core';

@Component({
  selector: 'app-charactercounter',
  templateUrl: './charactercounter.component.html',
  styleUrl: './charactercounter.component.css'
})
export class CharactercounterComponent {
  characterCount: number = 0;  
 
  onStringInput(event: Event): void {
    const inputString = (event.target as HTMLInputElement).value;
    this.characterCount = inputString.length;
  }
}
