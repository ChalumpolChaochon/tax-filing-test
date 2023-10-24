import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TaxModel } from 'src/model/tax-model';

@Component({
  selector: 'app-filing-type',
  templateUrl: './filing-type.component.html',
  styleUrls: ['./filing-type.component.css']
})
export class FilingTypeComponent implements OnInit {
  @Input() filingType: string = ''
  @Output() reTurnFilingType = new EventEmitter<any>();
  submitted = false
  constructor() { }

  ngOnInit(): void {
  }

  changeFilingType(){
    this.reTurnFilingType.emit(this.filingType)
  }

  isValid():boolean {
  
    if (this.filingType == '' || !this.filingType) {
      return false
    }
    return true
  }

}
