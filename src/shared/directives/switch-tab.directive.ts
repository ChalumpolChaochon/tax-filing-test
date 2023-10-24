import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[switch-tab]',
})
export class SwitchTabDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}