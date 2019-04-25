import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DialogData } from '../DialogData';

@Component({
  selector: 'app-create-phone-number-modal',
  templateUrl: './create-phone-number-modal.component.html',
  styleUrls: ['./create-phone-number-modal.component.css']
})
export class CreatePhoneNumberModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CreatePhoneNumberModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

    onNoClick(): void {
      this.dialogRef.close();
    }

    ngOnInit() {
    }

}
