import { Component } from '@angular/core';

@Component({
  selector: 'app-showusername',
  templateUrl: './showusername.component.html',
  styleUrl: './showusername.component.css'
})
export class ShowusernameComponent {
  displayedUsername: string = '';

  displayUsername(username: string): void {
    this.displayedUsername = username;
  }
}
