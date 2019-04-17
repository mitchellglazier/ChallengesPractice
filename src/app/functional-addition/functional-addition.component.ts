import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-functional-addition',
  templateUrl: './functional-addition.component.html',
  styleUrls: ['./functional-addition.component.css']
})
export class FunctionalAdditionComponent {

  constructor() { }

  n: number;
  n2 = 3;
  aNumber: number;

  add() {
    this.addAnother();
  }

  addAnother() {
    this.aNumber = (+this.n + +this.n2);
  }
}
