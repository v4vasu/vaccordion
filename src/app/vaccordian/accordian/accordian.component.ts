import { Component, OnInit, EventEmitter, trigger, state, style, transition, animate } from '@angular/core';
import {AccordianService} from '../service/accordian.service';
@Component({
  selector: 'accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.css'],
  host: {class:'crs-accordian'},
  animations: [
    trigger('toggleState', [
      state('close', style({
        'height': '0px',
        'background-color': 'white'
      })),
      state('open', style({
        'height': '200px',
        'background-color': 'orange'        
      })),
      transition('close => open', animate('250ms  ease-in')),
      transition('open => close', animate('250ms  ease-out'))
    ])
  ]
})
export class AccordianComponent implements OnInit {
  isOpened: boolean = false;
  state = 'close';
  constructor(private _accServcice: AccordianService) { }

  ngOnInit() {
  }
  toggleAccordian(){
    console.log(this.state);
    this.state = this.state == 'close' ? this.state = 'open': this.state = 'close';
    console.log(this.state);
    this._accServcice.isAnyAccordianOpened.emit(this);
  }
}
