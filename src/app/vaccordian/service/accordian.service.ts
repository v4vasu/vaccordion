import {Injectable, EventEmitter, Output} from '@angular/core';
@Injectable()
export class AccordianService{
    @Output() isAnyAccordianOpened = new EventEmitter<any>();
    _accordianArray:any[]=[];

    getAccordianObj(acc){
        this._accordianArray[acc.id] = acc;
        console.log(this._accordianArray);
    }
}
