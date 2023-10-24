import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-penalty',
  templateUrl: './penalty.component.html',
  styleUrls: ['./penalty.component.css']
})
export class PenaltyComponent implements OnInit {
  @Input() penalty: number = 0

  constructor() { }

  ngOnInit(): void {
  }

}
