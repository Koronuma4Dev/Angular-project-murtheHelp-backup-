import { Component } from '@angular/core';

@Component({
  selector: 'app-expensetracker',
  templateUrl: './expensetracker.component.html',
  styleUrl: './expensetracker.component.css'
})
export class ExpensetrackerComponent {
  expenses: { item: string; amount: number }[] = [];

  addExpense(item: string, amount: string): void {
    if (item && +amount > 0) {
      this.expenses.push({ item, amount: +amount });
    }
  }

  getTotal(): number {
    return this.expenses.reduce((sum, expense) => sum + expense.amount, 0);
  }
}
