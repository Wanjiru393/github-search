import { Directive } from '@angular/core';
import {ElementRef,Input,HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  textLight: any | undefined;

  constructor(private elem:ElementRef) { }

  @HostListener('mouseover') onMouseover() {
    this.textLight ("#777");
  }
  @HostListener('mouseleave') onMouseleave(){
    this.textLight ("#fff");
  }
  // private textLight(action:string){
  //   this.elem.nativeElement.style.color = action;
  // }

}
