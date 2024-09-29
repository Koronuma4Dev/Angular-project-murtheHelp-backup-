import { Component } from '@angular/core';

@Component({
  selector: 'app-uppercasegreeting',
  templateUrl: './uppercasegreeting.component.html',
  styleUrl: './uppercasegreeting.component.css'
})
export class UppercasegreetingComponent {
  greetings: string= '';

  uppercase(text: HTMLInputElement){
    this.greetings = `Hello, chat  ${text.value.toUpperCase()}`
  }
}
