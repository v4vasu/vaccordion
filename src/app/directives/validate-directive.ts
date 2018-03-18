import {Directive, OnInit, ElementRef, Renderer2, TemplateRef, ViewContainerRef} from '@angular/core';
@Directive({
 selector: '[crs-validate]',
})
export class CrsValidation implements OnInit{
    constructor(
        private el: ElementRef, 
        private renderer: Renderer2, 
        private containerRef: ViewContainerRef){
    }

    ngOnInit(){
        let g = this.el.nativeElement.getAttribute('crs-validate');
        let getFormControlName = this.el.nativeElement.getAttribute('formControlName');
        console.log(g);
        var vlist = g.split("||");
        for(var i=0; i< vlist.length; i++){
            let rulenMsg = vlist[i].split(":");
            let s = this.renderer.createElement('span');
            let msg = this.renderer.createText(rulenMsg[1]);
            this.renderer.setAttribute(s,"ng-if-simple", getFormControlName+'.'+rulenMsg[0]);
            this.renderer.appendChild(s,msg);
            this.renderer.appendChild(this.el.nativeElement.parentNode, s);
            console.log(getFormControlName);
        }
        
        
       // this.containerRef.createComponent();
    }

}