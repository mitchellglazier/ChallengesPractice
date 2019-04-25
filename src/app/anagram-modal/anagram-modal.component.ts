import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DialogData } from '../DialogData';

@Component({
  selector: 'app-anagram-modal',
  templateUrl: './anagram-modal.component.html',
  styleUrls: ['./anagram-modal.component.css']
})
export class AnagramModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AnagramModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
