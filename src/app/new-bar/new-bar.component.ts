import {Component, Input, OnInit} from '@angular/core';
import {IRating} from "../irating";

@Component({
  selector: 'app-new-bar',
  templateUrl: './new-bar.component.html',
  styleUrls: ['./new-bar.component.css']
})
export class NewBarComponent implements OnInit {

  ratingList: Array<IRating> = [];

  @Input() max = 5;
  @Input() ratingValue = 6;
  @Input() showRatingValue = true;


  constructor() { }

  calculate(max, ratingValue) {
    this.ratingList = Array.from({length: max},
      (_, index) => ({
        value: index + 1,
        active: index < ratingValue
      }));
  }

  ngOnInit() {
    this.calculate(this.max, this.ratingValue);
  }

  select(index) {
    this.ratingValue = index;
    this.ratingList.forEach((item, idx) =>
      item.active = idx < this.ratingValue);
    console.log(this.ratingValue);
    console.log(this.ratingList);
  }

}
