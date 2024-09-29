import { Component } from '@angular/core';

@Component({
  selector: 'app-userage',
  templateUrl: './userage.component.html',
  styleUrl: './userage.component.css'
})
export class UserageComponent {
 
    age: number | null = null;
  
    calculateAge(birthYear: string): void {
      const currentYear = new Date().getFullYear();
      const parsedBirthYear = parseInt(birthYear, 10);
  
      if (!isNaN(parsedBirthYear) && parsedBirthYear > 1900 && parsedBirthYear <= currentYear) {
        this.age = currentYear - parsedBirthYear;
      } else {
        this.age = null;
        alert('Please enter a valid birth year.');
      }
    }
  }
  

