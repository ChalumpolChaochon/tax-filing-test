import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdinaryFilingComponent } from './ordinary-filing.component';

describe('OrdinaryFilingComponent', () => {
  let component: OrdinaryFilingComponent;
  let fixture: ComponentFixture<OrdinaryFilingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdinaryFilingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdinaryFilingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
