import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sale-amount',
  templateUrl: './sale-amount.component.html',
  styleUrls: ['./sale-amount.component.css']
})
export class SaleAmountComponent implements OnInit {
  @Input() filingType: string = '0'
  @Input() saleAmount: number = 0
  @Output() returnSaleAmount = new EventEmitter<number>();
  submitted = false
  constructor() { }

  ngOnInit(): void {
  }

  onReTurn(){
    this.returnSaleAmount.emit(this.saleAmount)
  }

  isValid(): boolean {

    if (this.saleAmount == 0 || !this.saleAmount) {
      return false
    }
    return true
  }

}
