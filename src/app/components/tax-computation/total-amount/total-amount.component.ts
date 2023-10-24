import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-total-amount',
  templateUrl: './total-amount.component.html',
  styleUrls: ['./total-amount.component.css']
})
export class TotalAmountComponent implements OnInit {
  totalAmount : number = 0
  @Output() returnTotalAmount = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  setToTalAmount(taxAmount: number, surcharge: number, penalty: number) {
    this.totalAmount = taxAmount + surcharge + penalty
    this.returnTotalAmount.emit(this.totalAmount)
  }

}
