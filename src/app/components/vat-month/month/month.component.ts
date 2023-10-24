import { Component, Input, OnInit } from '@angular/core';
import { MonthModel, TaxModel } from 'src/model/tax-model';

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css'],
})
export class MonthComponent implements OnInit {
  @Input() monthList: MonthModel[] = [];
  @Input() month: string= ''
  submitted = false
  constructor() {}

  ngOnInit(): void {
    
  }

  setMonth(month:string){
    this.month = month
  }

  isValid():boolean {
    let current = new Date();
    let m = current.getMonth() + 1;
    if (this.month == '' || !this.month || Number(this.month) > m) {
      return false
    }
    return true
  }
}
