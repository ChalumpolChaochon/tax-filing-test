import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tax-amount',
  templateUrl: './tax-amount.component.html',
  styleUrls: ['./tax-amount.component.css']
})
export class TaxAmountComponent implements OnInit {
  @Input() saleAmount: number = 0
  taxAmount: number = null!
  tempTax:number = null!
  @Output() returnTaxAmount = new EventEmitter<number>();

  submitted = false

  constructor(
  ) { }

  ngOnInit(): void {
  }

  setSaleAmount(sale:number){
    this.saleAmount = sale
    this.taxCalculate()

  }

  taxCalculate(){
    if(this.saleAmount){
      const tax = this.saleAmount * 0.07
      this.taxAmount = parseFloat(tax.toFixed(2));
      this.tempTax = tax
      if(this.isValid()){
        this.returnTaxAmount.emit(this.taxAmount)
      }
    }
  }

  isValid(): boolean {
    if (this.taxAmount == 0 || !this.taxAmount) {
      return false
    }

    if(this.taxAmount >= this.tempTax+20 || this.taxAmount <= this.tempTax-20){
      alert('Invalid Tax')
      return false
    }


    return true
  }

}
