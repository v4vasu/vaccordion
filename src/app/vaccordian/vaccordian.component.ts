import { Component, ContentChildren, QueryList, AfterContentInit, Renderer2, ElementRef} from '@angular/core';
import {AccordianComponent} from './accordian/accordian.component';
import {AccordianService} from './service/accordian.service';

@Component({
  selector: 'crs-accordian',
  templateUrl: './vaccordian.component.html',
  styleUrls: ['./vaccordian.component.css']
})
export class VaccordianComponent implements  AfterContentInit {
  @ContentChildren(AccordianComponent) vaccordian: QueryList<AccordianComponent>; 
  _id:number = Math.floor(Math.random()*100 + 1);
  _temp:any;
 
  constructor(private _accService: AccordianService, private el: ElementRef, private renderer: Renderer2) { }
  ngAfterContentInit(){
    console.log(this.vaccordian);
    this._temp = this.vaccordian;
    this._temp.id = "crsAccordian_"+this._id;
    this.renderer.setAttribute(this.el.nativeElement, "id", "crsAccordian_"+this._id);
    this._accService.getAccordianObj(this._temp);

    this._accService.isAnyAccordianOpened.subscribe((accordian)=>{
      if(accordian !== undefined && accordian !== null){
          let currentAccordian = this._accService._accordianArray[accordian.parentId];
          currentAccordian.toArray().forEach(a => {
            a.isOpened = false;
            a.state = "close";
          });
          accordian.isOpened = true;
          accordian.state = "open";
      }
      console.log(this._accService._accordianArray[accordian.parentId]);
    });    
  }

}
