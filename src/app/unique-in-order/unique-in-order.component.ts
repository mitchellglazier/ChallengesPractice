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

  uniqueInOrder() {
    let z = 1;
    let i = 0;
    const str1 = this.str.replace(/\s/g, '');
    let charCheck = str1.charAt(i);
    for (; i < str1.length; i++) {
      let charCheck2 = str1.charAt(z);
      for (; z < str1.length; z++) {
        if (charCheck === charCheck2) {
            let str2 = str1.slice(0, i) + str1.slice(z);
            console.log(str2);
          } else {
            console.log(str1);
    }
    }
    }

      }
     }
 
