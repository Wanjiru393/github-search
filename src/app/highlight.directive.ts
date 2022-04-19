import { Directive } from '@angular/core';
import {ElementRef,Input,HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  textDark: any | undefined;

  constructor(private elem:ElementRef) { }

  @HostListener('mouseover') onMouseover() {
    this.textLight ("#777");
  }
  @HostListener('mouseleave') onMouseleave(){
    this.textLight ("#000");
  }
  private textLight(action:string){
    this.elem.nativeElement.style.color = action;
  }

}
