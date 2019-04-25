import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AnagramModalComponent } from '../anagram-modal/anagram-modal.component';


@Component({
  selector: 'app-anagram',
  templateUrl: './anagram.component.html',
  styleUrls: ['./anagram.component.css']
})
export class AnagramComponent {
  animal: string;
  name: string;
  str1: string;
  str2: string;
  anagram: boolean;

  constructor(public dialog: MatDialog) { }

  anagrams() {
    const word1 = this.str1.split('').sort().join('');
    const word2 = this.str2.split('').sort().join('');
    if (word1 === word2) {
      this.anagram = true;
    } else {
      this.anagram = false;
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AnagramModalComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.animal = result;
    });

}
}
