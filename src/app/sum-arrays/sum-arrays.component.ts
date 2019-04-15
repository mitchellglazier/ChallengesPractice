import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sum-arrays',
  templateUrl: './sum-arrays.component.html',
  styleUrls: ['./sum-arrays.component.css']
})
export class SumArraysComponent {

  constructor() { }

  number1: number;
  number2: number;
  number3: number;
  number4: number;
  number5: number;
  total: number;

  sum() {
    const numbers = [];
    numbers.push(
      this.number1,
      this.number2,
      this.number3,
      this.number4,
      this.number5);

    let total1 = numbers.map((x) => {
        return parseInt(x, 10);
      });
    this.total = total1.reduce((a, b) => a + b, 0);
}

}
