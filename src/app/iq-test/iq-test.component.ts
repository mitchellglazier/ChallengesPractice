import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iq-test',
  templateUrl: './iq-test.component.html',
  styleUrls: ['./iq-test.component.css']
})
export class IqTestComponent {

  constructor() { }

  number: string;
  index: string;
  array;

  iqTest() {
    const evenNumbers = [];
    const oddNumbers = [];
    let i = 0;
    this.array = this.number.split('');
    for (; i < this.array.length; i++) {
      if (this.array[i] % 2 === 0 ) {
        evenNumbers.push(i + 1);
      } else {
        oddNumbers.push(i + 1);
      }
    }
    if (evenNumbers.length > oddNumbers.length) {
      this.index = oddNumbers.toString();
    } else {
      this.index = evenNumbers.toString();
    }
  }

}
