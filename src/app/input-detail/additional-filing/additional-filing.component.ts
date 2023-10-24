import { Component, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { PenaltyComponent } from 'src/app/components/tax-computation/penalty/penalty.component';
import { SaleAmountComponent } from 'src/app/components/tax-computation/sale-amount/sale-amount.component';
import { SurchargeComponent } from 'src/app/components/tax-computation/surcharge/surcharge.component';
import { TaxAmountComponent } from 'src/app/components/tax-computation/tax-amount/tax-amount.component';
import { TotalAmountComponent } from 'src/app/components/tax-computation/total-amount/total-amount.component';
import { TaxModel } from 'src/model/tax-model';

@Component({
  selector: 'app-additional-filing',
  templateUrl: './additional-filing.component.html',
  styleUrls: ['./additional-filing.component.css']
})
export class AdditionalFilingComponent implements OnInit {

  @ViewChild(SaleAmountComponent, { static: true }) saleAmountCom!: SaleAmountComponent;
  @ViewChild(TaxAmountComponent, { static: true }) taxAmountCom!: TaxAmountComponent;
  @ViewChild(SurchargeComponent, { static: true }) surchargeCom!: SurchargeComponent;
  @ViewChild(PenaltyComponent, { static: true }) penaltyCom!: PenaltyComponent;
  @ViewChild(TotalAmountComponent, { static: true }) totalAmountCom!: TotalAmountComponent;
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
      this.onNextStep.next(this.items)
    }
  }

  getSaleAmount(saleAmount: number) {
    this.taxAmountCom.setSaleAmount(saleAmount)
  }

  getTaxAmount(taxAmount: number){
    this.surchargeCom.setTaxAmount(taxAmount)
  }

  getSurcharge(surcharge: number) {
    this.items.surcharge = surcharge
    this.items.penalty = 200
    this.penaltyCom.penalty = this.items.penalty
    this.totalAmountCom.setToTalAmount(this.items.taxAmount,this.items.surcharge,this.items.penalty)
  }

  getToTalAmount(totalAmount:number){
    this.items.totalAmount = totalAmount
  }

  isValid(): boolean {
    if (!this.saleAmountCom.isValid() || !this.taxAmountCom.isValid()) {
      return false
    }
    return true
  }

}
