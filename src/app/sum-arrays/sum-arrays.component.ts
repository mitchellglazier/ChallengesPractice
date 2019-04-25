import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sum-arrays',
  templateUrl: './sum-arrays.component.html',
  styleUrls: ['./sum-arrays.component.css']
})
export class SumArraysComponent {

  constructor() { }

  number1: string;
  
  total: number;

  sum() {

    const numbers = this.number1.split('');

    let total1 = numbers.map((x) => {
        return parseInt(x, 10);
      });
    this.total = total1.reduce((a, b) => a + b, 0);
}

}
