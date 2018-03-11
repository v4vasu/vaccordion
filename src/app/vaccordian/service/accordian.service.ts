import {Injectable, EventEmitter, Output} from '@angular/core';
@Injectable()
export class AccordianService{
    @Output() isAnyAccordianOpened = new EventEmitter<any>();
}
