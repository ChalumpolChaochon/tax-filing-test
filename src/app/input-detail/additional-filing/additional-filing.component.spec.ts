import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalFilingComponent } from './additional-filing.component';

describe('AdditionalFilingComponent', () => {
  let component: AdditionalFilingComponent;
  let fixture: ComponentFixture<AdditionalFilingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditionalFilingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalFilingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
