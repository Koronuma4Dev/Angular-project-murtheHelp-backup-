import { Component } from '@angular/core';

@Component({
  selector: 'app-showdate',
  templateUrl: './showdate.component.html',
  styleUrl: './showdate.component.css'
})
export class ShowdateComponent {
  
  currentDateTime: string = '';

  showDateTime(): void {
    const now = new Date();
    this.currentDateTime = now.toLocaleString();
}
}
