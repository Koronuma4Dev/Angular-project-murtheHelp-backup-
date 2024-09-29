import { Component } from '@angular/core';

@Component({
  selector: 'app-tableof-elements',
  templateUrl: './tableof-elements.component.html',
  styleUrl: './tableof-elements.component.css'
})
export class TableofElementsComponent {
  elements: string[] = ['Aluminum', 'Boron', 'Carbon', 'Oxygen', 'Fluorine'];
  filteredElements: string[] = [];
  submitted: boolean = false;

  onSubmit(letter: string): void {
    this.filteredElements = this.elements.filter((element) =>
      element.toLowerCase().startsWith(letter.toLowerCase())
    );
    this.submitted = true;  
  }
}
