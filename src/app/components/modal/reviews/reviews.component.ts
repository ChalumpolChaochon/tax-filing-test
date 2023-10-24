import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TaxModel } from 'src/model/tax-model';
import { TaxService } from 'src/services/tax.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  items:TaxModel = new TaxModel
  reviews:any
  constructor(
    public activeModal: NgbActiveModal,
    private taxService:TaxService,

  ) { }

  ngOnInit(): void {
    const res = this.taxService.get()
    this.reviews = JSON.stringify(res)
  }

}
