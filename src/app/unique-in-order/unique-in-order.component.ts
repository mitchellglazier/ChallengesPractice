import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unique-in-order',
  templateUrl: './unique-in-order.component.html',
  styleUrls: ['./unique-in-order.component.css']
})
export class UniqueInOrderComponent {

  constructor() { }

  str: string;
  charCheck: any;
  charCheck2: any;
  result: string;
  array: string;

  uniqueInOrder() {
    const array = this.str.split('');
    let i = 0;
    for (; i < array.length; i++) {
      const charCheck = array[i];
      const charCheck2 = array[i + 1];
      if (charCheck === charCheck2) {
      array.splice(i, 1);
      } else {
        this.result = array.toString().replace(/,/g, ' ');
      }
    }
    let z = 0;
    for (; z < array.length; z++) {
      const charCheck = array[z];
      const charCheck2 = array[z + 1];
      if (charCheck === charCheck2) {
      array.splice(z, 1);
      } else {
        this.result = array.toString().replace(/,/g, '');
      }
    }
  }
}
