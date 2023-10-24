import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { TaxModel } from 'src/model/tax-model';
import { TaxService } from 'src/services/tax.service';
import { ReviewsComponent } from '../components/modal/reviews/reviews.component';

@Component({
  selector: 'app-reviews-confirm',
  templateUrl: './reviews-confirm.component.html',
  styleUrls: ['./reviews-confirm.component.css']
})
export class ReviewsConfirmComponent implements OnInit {
  onNextStep: Subject<any> = new Subject();
  onBackStep: Subject<any> = new Subject();
  items:TaxModel = new TaxModel

  constructor(
    private modalService: NgbModal,

    private taxService:TaxService,

  ) { }

  ngOnInit(): void {
    this.loadInit()
  }
  async loadInit(){
    this.items = await this.taxService.get()
  }


  onClickBack(){
    this.onBackStep.next(true)
  }

  onClickConfirm(){
    const modalRef = this.modalService.open(ReviewsComponent, {
      size: 'lg',
      centered: true,
    })
    modalRef.componentInstance.items = this.items
    modalRef.componentInstance.onReturn.subscribe((result: any) => {
      
    })
  }

}
