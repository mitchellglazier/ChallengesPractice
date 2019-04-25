import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anagram',
  templateUrl: './anagram.component.html',
  styleUrls: ['./anagram.component.css']
})
export class AnagramComponent {
  str1: string;
  str2: string;
  anagram: boolean;

  constructor() { }

  anagrams() {
    const word1 = this.str1.split('').sort().join('');
    const word2 = this.str2.split('').sort().join('');
    if (word1 === word2) {
      this.anagram = true;
    } else {
      this.anagram = false;
    }
  }

}
