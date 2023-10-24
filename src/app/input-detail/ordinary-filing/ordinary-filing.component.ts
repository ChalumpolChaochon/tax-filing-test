import { Component, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { SaleAmountComponent } from 'src/app/components/tax-computation/sale-amount/sale-amount.component';
import { TaxAmountComponent } from 'src/app/components/tax-computation/tax-amount/tax-amount.component';
import { YearComponent } from 'src/app/components/vat-month/year/year.component';
import { TaxModel } from 'src/model/tax-model';

@Component({
  selector: 'app-ordinary-filing',
  templateUrl: './ordinary-filing.component.html',
  styleUrls: ['./ordinary-filing.component.css']
})
export class OrdinaryFilingComponent implements OnInit {
  @ViewChild(SaleAmountComponent, { static: true }) saleAmountCom!: SaleAmountComponent;
  @ViewChild(TaxAmountComponent, { static: true }) taxAmountCom!: TaxAmountComponent;
  onNextStep: Subject<any> = new Subject();
  items: TaxModel = new TaxModel
  submitted = false
  constructor() { }

  ngOnInit(): void {

  }

  onClickNext() {
    this.saleAmountCom.submitted = this.submitted
    this.taxAmountCom.submitted = this.submitted
    if (this.isValid()) {
      this.items.saleAmount = this.saleAmountCom.saleAmount
      this.items.taxAmount = this.taxAmountCom.taxAmount
      this.items.totalAmount = this.items.taxAmount
      this.onNextStep.next(this.items)
    }
  }

  getSaleAmount(saleAmount: number) {
    this.taxAmountCom.setSaleAmount(saleAmount)

  }

  isValid(): boolean {
    if (!this.saleAmountCom.isValid() || !this.taxAmountCom.isValid()) {
      return false
    }
    return true
  }

}
