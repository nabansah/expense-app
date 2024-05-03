import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExpenseFormComponent } from './expense-form/expense-form.component';
import { ExpenseListComponent } from './expense-list/expense-list.component';

const routes: Routes = [
  {
    path : "",
    component : HomeComponent
  },
  {
    path : "new",
    component : ExpenseFormComponent
  },
  {
    path : "list",
    component : ExpenseListComponent
  },
  {
    path : "edit/:id",
    component : ExpenseFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
