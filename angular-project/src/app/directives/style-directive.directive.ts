import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appStyleDirective]',
})
export class StyleDirectiveDirective {
  constructor(private elementRef: ElementRef) {
    elementRef.nativeElement.style.color = 'red';
  }
}
