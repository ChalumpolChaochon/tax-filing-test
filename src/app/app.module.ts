import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule, DecimalPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputDetailComponent } from './input-detail/input-detail.component';
import { ReviewsConfirmComponent } from './reviews-confirm/reviews-confirm.component';

import { SharedModule } from 'src/shared/shared.module';
import { FilingTypeComponent } from './components/filing-type/filing-type.component';
import { MonthComponent } from './components/vat-month/month/month.component';
import { YearComponent } from './components/vat-month/year/year.component';
import { SaleAmountComponent } from './components/tax-computation/sale-amount/sale-amount.component';
import { TaxAmountComponent } from './components/tax-computation/tax-amount/tax-amount.component';
import { SurchargeComponent } from './components/tax-computation/surcharge/surcharge.component';
import { PenaltyComponent } from './components/tax-computation/penalty/penalty.component';
import { TotalAmountComponent } from './components/tax-computation/total-amount/total-amount.component';
import { OrdinaryFilingComponent } from './input-detail/ordinary-filing/ordinary-filing.component';
import { AdditionalFilingComponent } from './input-detail/additional-filing/additional-filing.component';
import { ReviewsComponent } from './components/modal/reviews/reviews.component';

@NgModule({
  declarations: [
    AppComponent,
    InputDetailComponent,
    ReviewsConfirmComponent,
    FilingTypeComponent,
    MonthComponent,
    YearComponent,
    SaleAmountComponent,
    TaxAmountComponent,
    SurchargeComponent,
    PenaltyComponent,
    TotalAmountComponent,
    OrdinaryFilingComponent,
    AdditionalFilingComponent,
    ReviewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [DecimalPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
