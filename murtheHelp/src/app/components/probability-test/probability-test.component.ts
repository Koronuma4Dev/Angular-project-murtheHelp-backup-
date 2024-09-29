import { Component } from '@angular/core';

@Component({
  selector: 'app-probability-test',
  templateUrl: './probability-test.component.html',
  styleUrl: './probability-test.component.css'
})
export class ProbabilityTestComponent {
  probability: number | null = null;

  
  calculateProbability(event: Event): void {
    event.preventDefault();
    
   
    const favorableInput = (event.target as HTMLFormElement).querySelector('#favorable') as HTMLInputElement;
    const totalInput = (event.target as HTMLFormElement).querySelector('#total') as HTMLInputElement;
    
    const favorableOutcomes = parseInt(favorableInput.value);
    const totalOutcomes = parseInt(totalInput.value);

   
    if (!isNaN(favorableOutcomes) && !isNaN(totalOutcomes) && totalOutcomes > 0) {
      this.probability = favorableOutcomes / totalOutcomes;
    } else {
      this.probability = null;
    }
  }
}
