import { Component, ContentChildren, QueryList, AfterContentInit} from '@angular/core';
import {AccordianComponent} from './accordian/accordian.component';
import {AccordianService} from './service/accordian.service';

@Component({
  selector: 'crs-accordian',
  templateUrl: './vaccordian.component.html',
  styleUrls: ['./vaccordian.component.css']
})
export class VaccordianComponent implements  AfterContentInit {
  @ContentChildren(AccordianComponent) vaccordian: QueryList<AccordianComponent>; 

  constructor(private _accService: AccordianService) { }
  tempArr: any[];
  ngAfterContentInit(){
    console.log(this.vaccordian);
    this.tempArr.push(Object.assign({}, this.vaccordian) );  
    this._accService.isAnyAccordianOpened.subscribe((currentAcc)=>{
      this.openAccordian(currentAcc);
    });    
  }
  openAccordian(accordian: AccordianComponent){
    if(accordian.isOpened){     
      accordian.isOpened = false;
      accordian.state = "close";
    }else{
      var v = this.vaccordian.toArray().length;
      this.vaccordian.toArray().forEach(a => {
        a.isOpened = false;
        a.state = "close";
      });
      accordian.isOpened = true;
      accordian.state = "open";
    }
    console.log(this.vaccordian); 
    console.log(v);
  }

}
