import { Component, OnInit } from '@angular/core';
import { ConstantPool } from '@angular/compiler';

@Component({
  selector: 'app-multiply',
  templateUrl: './multiply.component.html',
  styleUrls: ['./multiply.component.css']
})
export class MultiplyComponent {

  constructor() { }

  number1: number;
  number2: number;
  number3: number;

  multiply() {
    this.number3 = (this.number1 * this.number2);
  }

}
