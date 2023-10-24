import { DecimalPipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-surcharge',
  templateUrl: './surcharge.component.html',
  styleUrls: ['./surcharge.component.css']
})
export class SurchargeComponent implements OnInit {
  @Input() taxAmount: number = 0
  surcharge: number = 0
  @Output() returnSurcharge = new EventEmitter<number>();

  constructor(
    private _DecimalPipe: DecimalPipe,

  ) { }

  ngOnInit(): void {
  }

  setTaxAmount(tax: number) {
    this.taxAmount = tax
    this.surchargeCalculate()

  }

  surchargeCalculate() {
    if(this.taxAmount){
      const sur = this.taxAmount * 0.1
      this.surcharge = parseFloat(sur.toFixed(2));
      this.returnSurcharge.emit(this.surcharge)
    }
  }

}
