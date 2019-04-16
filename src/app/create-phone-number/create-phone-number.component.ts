import { Component } from '@angular/core';

@Component({
  selector: 'app-create-phone-number',
  templateUrl: './create-phone-number.component.html',
  styleUrls: ['./create-phone-number.component.css']
})
export class CreatePhoneNumberComponent {

  constructor() { }

  number1: number;
  number2: number;
  number3: number;
  number4: number;
  number5: number;
  number6: number;
  number7: number;
  number8: number;
  number9: number;
  number10: number;
  phoneNumber = '';

createPhoneNumber() {
  const numbers = [];
  numbers.push(
    this.number1,
    this.number2,
    this.number3,
    this.number4,
    this.number5,
    this.number6,
    this.number7,
    this.number8,
    this.number9,
    this.number10);
  const newNumbers = numbers.map(String);
  const areaCode = [newNumbers[0], newNumbers[1], newNumbers[2]];
  const areaCodeJoin = areaCode.join('');
  const threeDigits = [newNumbers[3], newNumbers[4], newNumbers[5]];
  const threeDigitsjoin = threeDigits.join('');
  const fourDigits = [newNumbers[6], newNumbers[7], newNumbers[8], newNumbers[9]];
  const fourDigitsJoin = fourDigits.join('');
  this.phoneNumber = ('(' + areaCodeJoin + ') ' + threeDigitsjoin + '-' + fourDigitsJoin);

  }


shuffleArray(numbers) {
  for (let i = numbers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
  }
}
}
