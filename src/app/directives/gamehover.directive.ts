import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[gamehover]'
})
export class GamehoverDirective {

  @Input('gamehover')
  onHover = false;

  constructor() {
    console.log("created")
  }

  @HostBinding('class.gamehover')
  get cssClasses(){
    return this.onHover
  }

  @HostListener('mouseover')
  mouseOver(){
    this.onHover = true;
  }

  @HostListener('mouseleave')
  mouseLeave(){
    this.onHover = false;
  }


}
