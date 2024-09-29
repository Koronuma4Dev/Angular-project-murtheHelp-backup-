import { Component } from '@angular/core';

@Component({
  selector: 'app-currencyformatter',
  templateUrl: './currencyformatter.component.html',
  styleUrl: './currencyformatter.component.css'
})
export class CurrencyformatterComponent {
 Dollar: number =0;
 Euro: number =0;

 format(number:  HTMLInputElement){
  this.Dollar = Number(number.value) * 50;
  this.Euro = Number(number.value) * 60;
 }
}
