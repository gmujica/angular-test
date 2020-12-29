import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NewItemComponent implements OnInit {

  //@Input() item: string = ''

  displayBasic: boolean = false
  myArray = []

  //open modal
  showBasicDialog() {
    this.displayBasic = true;

}

//add item and close modal
 setItem() {
   //console.log('item')
    this.displayBasic = false;
 }
  constructor() { }

  ngOnInit(): void {
  }

}
