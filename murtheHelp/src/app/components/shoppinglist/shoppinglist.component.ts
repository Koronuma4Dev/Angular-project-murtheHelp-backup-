import { Component } from '@angular/core';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrl: './shoppinglist.component.css'
})
export class ShoppinglistComponent {

  shoppingList: string[] = [];


  addItem(inputElement: HTMLInputElement) {
    const newItem = inputElement.value.trim();
    if (newItem) {
      this.shoppingList.push(newItem);
      inputElement.value = ''; 
    }
  }


  removeItem(index: number) {
    this.shoppingList.splice(index, 1);
  }
}
