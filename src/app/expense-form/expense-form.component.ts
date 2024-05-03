import { Component , OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExpenseService } from '../expense/expense.service';
import { Expense } from '../models/expense';
import { Router , ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrl: './expense-form.component.css'
})
export class ExpenseFormComponent implements OnInit {

  expenseForm : FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder, private expenseService: ExpenseService,
    private router: Router, private activatedRoute: ActivatedRoute)
  {}

  ngOnInit(): void {
    this.expenseForm = this.formBuilder.group({
      spender: ['', Validators.required],
      amount: ['', [Validators.required, Validators.pattern(/^[0-9]\d*$/)]],
      category: ['', Validators.required],
      notes: ['', Validators.required],
      spentOn: ['', Validators.required]
    })

   let id = this.activatedRoute.snapshot.paramMap.get('id');
   if(id){
    let expense = this.expenseService.getExpense(id);

  if(expense)
    this.expenseForm.patchValue(expense);
   }
  }


  onSubmit(){
    if(this.expenseForm.valid)
      {
        let expense: Expense = this.expenseForm.value;
        let id = this.activatedRoute.snapshot.paramMap.get('id');

        if(id){
         this.expenseService.updatedExpense(id, expense);
        }
        else{
          this.expenseService.addExpense(expense);
        }

        this.router.navigate(['/list'])
      }
  }
}
