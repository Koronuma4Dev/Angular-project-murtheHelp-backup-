import { Component } from '@angular/core';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrl: './recipe-book.component.css'
})
export class RecipeBookComponent {
  recipes = [
    { name: 'Spaghetti Carbonara', ingredients: ['Spaghetti', 'Eggs', 'Parmesan', 'Pancetta', 'Pepper'] },
    { name: 'Chicken Curry', ingredients: ['Chicken', 'Coconut Milk', 'Curry Paste', 'Onions', 'Garlic'] },
    { name: 'Pancakes', ingredients: ['Flour', 'Milk', 'Eggs', 'Butter', 'Sugar'] }
  ];
}
