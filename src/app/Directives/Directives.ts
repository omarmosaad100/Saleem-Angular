import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appActivateBtn]'
})
export class ActivateBtnDirective {

  constructor(private btn:ElementRef) { }

  @HostListener("click") click(){
    console.log();

    Array.from(this.btn.nativeElement.parentNode.children).forEach((_btn:any)=>{
      _btn.classList.remove('active')
    })
    this.btn.nativeElement.classList.add('active');
  }

}
