import { Component } from '@angular/core';

@Component({
  selector: 'app-compoundinterestcalculator',
  templateUrl: './compoundinterestcalculator.component.html',
  styleUrl: './compoundinterestcalculator.component.css'
})
export class CompoundinterestcalculatorComponent {
  result: number | null = null;

  onSubmit(event: Event) {
    event.preventDefault();

   
    const principal = (document.getElementById('principal') as HTMLInputElement).valueAsNumber;
    const rate = (document.getElementById('rate') as HTMLInputElement).valueAsNumber;
    const time = (document.getElementById('time') as HTMLInputElement).valueAsNumber;
    const frequency = (document.getElementById('frequency') as HTMLInputElement).valueAsNumber;

   
    const compoundInterest = this.calculateCompoundInterest(principal, rate, time, frequency);
    this.result = compoundInterest;
  }

  calculateCompoundInterest(principal: number, rate: number, time: number, frequency: number): number {
    const rateDecimal = rate / 100;
    const compoundAmount = principal * Math.pow(1 + rateDecimal / frequency, frequency * time);
    return compoundAmount - principal;
  }
}
