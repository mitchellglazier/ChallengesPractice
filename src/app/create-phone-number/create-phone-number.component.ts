import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CreatePhoneNumberModalComponent } from '../create-phone-number-modal/create-phone-number-modal.component';

@Component({
  selector: 'app-create-phone-number',
  templateUrl: './create-phone-number.component.html',
  styleUrls: ['./create-phone-number.component.css']
})
export class CreatePhoneNumberComponent {

  constructor(public dialog: MatDialog) { }
  
  animal: string;
  name: string;
  number1: string;
  phoneNumber = '';


createPhoneNumber() {
  const array = this.number1.split('');
  const areaCode = [array[0], array[1], array[2]];
  const areaCodeJoin = areaCode.join('');
  const threeDigits = [array[3], array[4], array[5]];
  const threeDigitsjoin = threeDigits.join('');
  const fourDigits = [array[6], array[7], array[8], array[9]];
  const fourDigitsJoin = fourDigits.join('');
  this.phoneNumber = ('(' + areaCodeJoin + ') ' + threeDigitsjoin + '-' + fourDigitsJoin);

  }


shuffleArray(numbers) {
  for (let i = numbers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
  }
}

openDialog(): void {
  const dialogRef = this.dialog.open(CreatePhoneNumberModalComponent, {
    width: '250px',
  });

  dialogRef.afterClosed().subscribe(result => {
    this.animal = result;
  });

}
}
