import { Component } from '@angular/core';

@Component({
  selector: 'app-exesandooos',
  templateUrl: './exesandooos.component.html',
  styleUrls: ['./exesandooos.component.css']
})
export class ExesandooosComponent {
  durationInSeconds = 5;
  str: string;
  isEqual: boolean;

  constructor() { }

xoCheck(event: any) {
  let oCounter = 0;
  let xCounter = 0;
  const str1 = this.str.toLowerCase();
  let i = str1.length;
  while (i--) {
      if (str1.charAt(i) === 'o') {
        oCounter++;
      }
      if (str1.charAt(i) === 'x') {
        xCounter++;
      }
    }
  if (oCounter === xCounter) {
      this.isEqual = true; 
    } else {
     this.isEqual = false;
  }
}

}
