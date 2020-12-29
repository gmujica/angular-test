import { Component } from '@angular/core';
import {DataService} from './data.service'
import {TableModule} from 'primeng/table';
import {ItemModel} from './item-model.model'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'test-angular';
  dataTest=[]


  doAlert(){
    console.log(this.dataTest);
    
    console.log(this.dataTest.length);
    
    //test data
    this.dataTest.push({
      accessURL: 'accessURL-text',
      title: 'title-text',
      _about:'_about.text'
    })
  }

//set data from API
  constructor(private data:DataService){
    this.data.getData().subscribe(item=> {
      console.log(item);
      this.dataTest=item.result.items
      
    })
  }
}
