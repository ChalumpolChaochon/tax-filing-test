import { Component, ComponentRef, ElementRef, OnInit, Type, ViewChild } from '@angular/core';
import { SwitchTabDirective } from 'src/shared/directives/switch-tab.directive';
import { AdditionalFilingComponent } from './additional-filing/additional-filing.component';
import { OrdinaryFilingComponent } from './ordinary-filing/ordinary-filing.component';
import { TaxService } from 'src/services/tax.service';
import { MonthModel, TaxModel, YearModel } from 'src/model/tax-model';
import { MonthComponent } from '../components/vat-month/month/month.component';
import { YearComponent } from '../components/vat-month/year/year.component';
import { FilingTypeComponent } from '../components/filing-type/filing-type.component';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-input-detail',
  templateUrl: './input-detail.component.html',
  styleUrls: ['./input-detail.component.css']
})
export class InputDetailComponent implements OnInit {
  @ViewChild(SwitchTabDirective, { static: true }) switchTab!: SwitchTabDirective;
  @ViewChild(FilingTypeComponent, { static: true }) FilingTypeRadio!: FilingTypeComponent;
  @ViewChild(MonthComponent, { static: true }) monthSelector!: MonthComponent;
  @ViewChild(YearComponent, { static: true }) yearSelector!: YearComponent;

  onNextStep: Subject<any> = new Subject();
  onBackStep: Subject<any> = new Subject();

  yearList:YearModel[] = []
  monthList:MonthModel[] = []
  items:TaxModel = new TaxModel
  componentRef!: ComponentRef<any>;
  submitted = false
  constructor(
    private taxService : TaxService,
    private el: ElementRef
  ) { }

  ngOnInit(): void {
    this.loadInit()
  }

  async loadInit() {
    this.yearList = await this.taxService.getYears()
    this.monthList = await this.taxService.getMonts()
    this.focusTabDetailType(this.items.filingType);
  }

  focusTabDetailType(tab: string) {
    this.items = new TaxModel
    this.items.filingType = tab
    if (this.items.filingType == '0') this.loadComponent(OrdinaryFilingComponent);
    if (this.items.filingType == '1') this.loadComponent(AdditionalFilingComponent);
  }

  loadComponent(component: Type<any>) {
    const viewContainerRef = this.switchTab.viewContainerRef;
    viewContainerRef.clear();
    this.componentRef = viewContainerRef.createComponent(component)
    this.componentRef.instance.items = this.items
    this.setDefault()
    this.componentRef.instance.onNextStep.subscribe((item: any) => {
      this.saveData()
    });
  }

  setDefault(){
    this.monthSelector.setMonth(this.items.month)
    this.yearSelector.setYear(this.items.year)
    this.submitted = false
    this.setSubmit()
  }

  setSubmit(){
    this.FilingTypeRadio.submitted = this.submitted
    this.monthSelector.submitted = this.submitted
    this.yearSelector.submitted = this.submitted
    this.componentRef.instance.submitted = this.submitted
  }


  onClickNext(){
    this.setSubmit()
    this.componentRef.instance.onClickNext()
    
  }

  saveData(){
    if(this.isValid()){
      this.items.filingType = this.FilingTypeRadio.filingType
      this.items.month = this.monthSelector.month
      this.items.year = this.yearSelector.year
      this.taxService.save(this.items)
      this.onNextStep.next(this.items)
    }

  }

  isValid():boolean{
    let OrdinaryFilingIsValid = this.componentRef.instance.isValid()
    if(!this.monthSelector.isValid() || !this.yearSelector.isValid() || !OrdinaryFilingIsValid){
      return false
    }
    return true
  }
}
