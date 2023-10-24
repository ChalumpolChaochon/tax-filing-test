import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { CurrencyFormatDirective } from './directives/currency.directive';
import { SwitchTabDirective } from './directives/switch-tab.directive';



@NgModule({
  declarations: [

    SwitchTabDirective,
    CurrencyFormatDirective,

  ],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterModule],
  exports: [
    SwitchTabDirective,
    ReactiveFormsModule,
    FormsModule,
    CurrencyFormatDirective,

  ],
})
export class SharedModule {}
