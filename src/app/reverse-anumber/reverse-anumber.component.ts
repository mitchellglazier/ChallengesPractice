import { Component, OnInit } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-reverse-anumber',
  templateUrl: './reverse-anumber.component.html',
  styleUrls: ['./reverse-anumber.component.css']
})
export class ReverseANumberComponent {

  constructor() { }

  n: number;
  rNumber1: number;

reversedNum() {
  const rNumber = '' + this.n;
  this.rNumber1 =
    parseFloat(
      rNumber.split('').reverse().join('')
      ) * Math.sign(this.n);
    }
  }
