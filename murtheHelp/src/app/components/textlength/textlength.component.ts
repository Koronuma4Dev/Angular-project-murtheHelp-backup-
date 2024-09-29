import { Component } from '@angular/core';

@Component({
  selector: 'app-textlength',
  templateUrl: './textlength.component.html',
  styleUrl: './textlength.component.css'
})
export class TextlengthComponent {
  stringLength: number = 0;

    calculateStringLength(inputValue: string): void {
      this.stringLength = inputValue.length;
    }
    
  
  
}
