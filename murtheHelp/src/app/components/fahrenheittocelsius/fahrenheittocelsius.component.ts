import { Component } from '@angular/core';

@Component({
  selector: 'app-fahrenheittocelsius',
  templateUrl: './fahrenheittocelsius.component.html',
  styleUrl: './fahrenheittocelsius.component.css'
})
export class FahrenheittocelsiusComponent {
  celsiusValue: number | null = null;

  
  convertFahrenheitToCelsius(fahrenheit: number): number {
    return (fahrenheit - 32) * 5 / 9;
  }


  onInputChange(event: Event): void {
    const input = (event.target as HTMLInputElement).value;
    const fahrenheitValue = parseFloat(input);

    
    if (!isNaN(fahrenheitValue)) {
      this.celsiusValue = parseFloat(this.convertFahrenheitToCelsius(fahrenheitValue).toFixed(2));
    } else {
      this.celsiusValue = null;
    }
  }
}
