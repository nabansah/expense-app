import { Injectable } from '@angular/core';
import { Expense } from '../models/expense';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  private expenses : Expense[] = [];

  constructor() {
    let savedExpenses = localStorage.getItem("expenses");
    this.expenses = savedExpenses ? JSON.parse(savedExpenses) : [];
  }

  //CRUD

  getExpenses() : Expense []{
    console.log(this.expenses);
    return this.expenses;
  }

  getExpense(id: string) : Expense | undefined {
    console.log(this.expenses);
    return this.expenses.find(exp => exp.id === id);
  }

/////////////////////////////////////////////////////////

  addExpense(expense: Expense) : void{
    expense.id = Date.now().toString();
    this.expenses.push(expense);
    console.log(this.expenses);
    localStorage.setItem("expenses", JSON.stringify(this.expenses));
  }

  deleteExpense(id: string) : void{
    let index = this.expenses.findIndex(exp => exp.id === id)
    this.expenses.splice(index, 1);
    console.log(this.expenses);
    localStorage.setItem("expenses", JSON.stringify(this.expenses));
  }

  updatedExpense(id: String, updatedExpense: Expense) : void{
    let index = this.expenses.findIndex(exp => exp.id === id)
    this.expenses[index] = updatedExpense;
    console.log(this.expenses);
    localStorage.setItem("expenses", JSON.stringify(this.expenses));
  }

}
