import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpenseFormComponent } from '../expense-form/expense-form.component';
import { ExpenseListComponent } from '../expense-list/expense-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeModule } from '../home/home.module';


@NgModule({
  declarations: [
    ExpenseFormComponent,
    ExpenseListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HomeModule
  ]
})
export class ExpenseModule { }
