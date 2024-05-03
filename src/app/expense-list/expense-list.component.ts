import { Component, OnInit } from '@angular/core';
import { Expense } from '../models/expense';
import { ExpenseService } from '../expense/expense.service';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrl: './expense-list.component.css'
})
export class ExpenseListComponent implements OnInit {

  expenses: Expense[] = [];

  constructor(private expenseservice: ExpenseService)
  {}

  ngOnInit(): void {
    this.expenses = this.expenseservice.getExpenses();
  }

  deleteExpense(id: string){
    this.expenseservice.deleteExpense(id);
  }




}
