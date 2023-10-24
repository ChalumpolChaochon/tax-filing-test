import { Component, ComponentFactoryResolver, ComponentRef, OnInit, Type, ViewChild } from '@angular/core';
import { InputDetailComponent } from './input-detail/input-detail.component';
import { ReviewsConfirmComponent } from './reviews-confirm/reviews-confirm.component';
import { SwitchTabDirective } from 'src/shared/directives/switch-tab.directive';
import { TaxModel } from 'src/model/tax-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild(SwitchTabDirective, { static: true }) switchTab!: SwitchTabDirective;
  tabNumber: number = 1;
  componentRef!: ComponentRef<any>;
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
  ) { }

  ngOnInit(): void {
    this.loadInit()
  }

  async loadInit() {
    this.focusTabDetailType(this.tabNumber);
  }

  focusTabDetailType(tab: number) {
    this.tabNumber = tab
    if (this.tabNumber == 1) this.loadComponent(InputDetailComponent);
    if (this.tabNumber == 2) this.loadComponent(ReviewsConfirmComponent);
  }

  loadComponent(component: Type<any>) {
    const viewContainerRef = this.switchTab.viewContainerRef;
    viewContainerRef.clear();
    this.componentRef = viewContainerRef.createComponent(component)
    this.componentRef.instance.onNextStep.subscribe((item: any) => {
      this.focusTabDetailType(2)
    });
    this.componentRef.instance.onBackStep.subscribe((item: any) => {
      this.focusTabDetailType(1)
    });
  }

  onClickNext(){
    this.componentRef.instance.submitted = true
    this.componentRef.instance.onClickNext()
  }

  onClickBack(){
    this.componentRef.instance.onClickBack()
  }

  onClickConfirm(){
    this.componentRef.instance.onClickConfirm()
  }
}
