import { Component } from '@angular/core';

@Component({
  selector: 'app-interestcalculator',
  templateUrl: './interestcalculator.component.html',
  styleUrl: './interestcalculator.component.css'
})
export class InterestcalculatorComponent {
Interest: number=0;

calculate(
 Principal: HTMLInputElement,
 Rate: HTMLInputElement,
 Time:HTMLInputElement
){
  this.Interest=  Number(Principal.value) * Number(Rate.value) * Number(Time.value);
}

}
