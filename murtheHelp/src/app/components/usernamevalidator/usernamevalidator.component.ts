import { Component } from '@angular/core';

@Component({
  selector: 'app-usernamevalidator',
  templateUrl: './usernamevalidator.component.html',
  styleUrl: './usernamevalidator.component.css'
})
export class UsernamevalidatorComponent {
  UsernameValidation : string = ''; 

  
  UsernameValidate (username: string) {
    const minLength = 5;
    const maxLength = 15;
    const regex = /^[a-zA-Z][a-zA-Z0-9]*$/; 

    if (username.length < minLength || username.length > maxLength) {
      this.UsernameValidation  = `Username must be between ${minLength} and ${maxLength} characters.`;
    } else if (!regex.test(username)) {
      this.UsernameValidation  = 'Username must start with a letter and contain only letters and numbers.';
    } else {
      this.UsernameValidation  = 'Username is valid!';
    }
}
}
