import { Component } from '@angular/core';

@Component({
  selector: 'app-bmisolver',
  templateUrl: './bmisolver.component.html',
  styleUrl: './bmisolver.component.css'
})
export class BmisolverComponent {
  bmi: number | null = null;


  calculateBMI(height: string, weight: string) {
    const h = parseFloat(height);
    const w = parseFloat(weight);

   
    if (h > 0 && w > 0) {
      this.bmi = w / (h * h); 
    } else {
      this.bmi = null; 
    }
  }
}
