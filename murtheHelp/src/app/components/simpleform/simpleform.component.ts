
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'; 

@Component({
  selector: 'app-simpleform',
  templateUrl: './simpleform.component.html',
  styleUrl: './simpleform.component.css'
})
export class SimpleformComponent {
  submittedData = { name: '', email: '' };
  submitted = false;

  onSubmit(event: Event){
    event.preventDefault(); 
    const form = event.target as HTMLFormElement;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;

    this.submittedData = { name, email };
    this.submitted = true;
  }
}
  