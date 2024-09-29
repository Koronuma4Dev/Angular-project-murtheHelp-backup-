import { Component } from '@angular/core';

@Component({
  selector: 'app-usergreeting',
  templateUrl: './usergreeting.component.html',
  styleUrl: './usergreeting.component.css'
})
export class UsergreetingComponent {
  greeting: string = '';

  greetUser(name: string): void {
    if (name.trim()) {
      this.greeting = `Hello, ${name}! Welcome !`;
    } else {
      this.greeting = 'Please enter your name.';
    }
  }
}
