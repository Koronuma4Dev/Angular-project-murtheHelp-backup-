import { Component } from '@angular/core';

@Component({
  selector: 'app-temperatureconverter',
  templateUrl: './temperatureconverter.component.html',
  styleUrl: './temperatureconverter.component.css'
})
export class TemperatureconverterComponent {
  celsiusValue: number | null = null;
  fahrenheitValue: number | null = null;

  // Handle Celsius input and convert to Fahrenheit
  onCelsiusInput(event: Event): void {
    const inputValue = (event.target as HTMLInputElement).value;
    const celsius = parseFloat(inputValue);

    if (!isNaN(celsius)) {
      this.celsiusValue = celsius;
      this.fahrenheitValue = this.convertCelsiusToFahrenheit(celsius);
    } else {
      this.celsiusValue = null;
      this.fahrenheitValue = null;
    }
  }

  // Handle Fahrenheit input and convert to Celsius
  onFahrenheitInput(event: Event): void {
    const inputValue = (event.target as HTMLInputElement).value;
    const fahrenheit = parseFloat(inputValue);

    if (!isNaN(fahrenheit)) {
      this.fahrenheitValue = fahrenheit;
      this.celsiusValue = this.convertFahrenheitToCelsius(fahrenheit);
    } else {
      this.celsiusValue = null;
      this.fahrenheitValue = null;
    }
  }

  // Convert Celsius to Fahrenheit
  convertCelsiusToFahrenheit(celsius: number): number {
    return (celsius * 9/5) + 32;
  }

  // Convert Fahrenheit to Celsius
  convertFahrenheitToCelsius(fahrenheit: number): number {
    return (fahrenheit - 32) * 5/9;
  }
}
