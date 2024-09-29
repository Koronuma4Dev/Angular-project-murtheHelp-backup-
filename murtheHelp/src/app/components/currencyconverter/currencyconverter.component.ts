import { Component } from '@angular/core';

@Component({
  selector: 'app-currencyconverter',
  templateUrl: './currencyconverter.component.html',
  styleUrl: './currencyconverter.component.css'
})
export class CurrencyconverterComponent {
  convertedToPHP: number = 0;
  convertedToKRW: number = 0;
  convertedToJPY: number = 0;

  convertCurrency(usdValue: string): void {
    const usd = parseFloat(usdValue);
    if (!isNaN(usd) && usd > 0) {
      this.convertedToPHP = usd * 56;
      this.convertedToKRW = usd * 1340;
      this.convertedToJPY = usd * 146;
    } else {
      this.convertedToPHP = this.convertedToKRW = this.convertedToJPY = 0;
    }
  }
}
