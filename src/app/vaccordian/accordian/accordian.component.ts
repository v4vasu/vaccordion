import { Component,Input, OnInit, EventEmitter, trigger, state, style, transition, animate } from '@angular/core';
import {AccordianService} from '../service/accordian.service';
@Component({
  selector: 'accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.css'],
  host: {class:'crs-accordian'},
  animations: [
    trigger('toggleState', [
      state('close', style({
        'padding': '0px'
      })),
      state('open', style({
        'padding': '1px'      
      })),
      transition('close => open', animate('250ms  ease-in')),
      transition('open => close', animate('250ms  ease-out'))
    ])
  ]
})
export class AccordianComponent implements OnInit {
  //isOpened: boolean = false;
  state = 'close';
  @Input('openAccordion') isOpened: boolean;
  constructor(private _accServcice: AccordianService) { }

  ngOnInit() {
    this.isOpened = this.isOpened == undefined ? this.isOpened = false: this.isOpened = this.isOpened;
    if(this.isOpened){
      this.state = 'open';
    }
  }
  toggleAccordian(){
    console.log(this.state);
    this.state = this.state == 'close' ? this.state = 'open': this.state = 'close';
    console.log(this.state);
    this._accServcice.isAnyAccordianOpened.emit(this);
  }
}
