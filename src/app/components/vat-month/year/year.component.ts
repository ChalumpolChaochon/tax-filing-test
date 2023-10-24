import { Component, Input, OnInit } from '@angular/core';
import { TaxModel, YearModel } from 'src/model/tax-model';

@Component({
  selector: 'app-year',
  templateUrl: './year.component.html',
  styleUrls: ['./year.component.css'],
})
export class YearComponent implements OnInit {
  @Input() yearList: YearModel[] = [];
  @Input() year: string = ''
  submitted = false
  constructor() { }

  ngOnInit(): void { }

  setYear(year:string){
    this.year = year
  }

  isValid(): boolean {

    if (this.year == '' || !this.year) {
      return false
    }
    return true
  }
}
