import {Directive, ElementRef, EventEmitter, HostListener, Output} from '@angular/core';

@Directive({
  selector: '[appFormOnClick]'
})
export class FormOnClickDirective {

  constructor(private elementRef: ElementRef) {
  }

  @Output() clickInput = new EventEmitter<MouseEvent>();

  @HostListener('click', ['$event.target'])
  public onClick(event: MouseEvent): void {

    if (event['className'].indexOf('form-login__input')>= 0) {
      this.clickInput.emit();
    }
    if (event['className'].indexOf('form-registration__input') >= 0) {
      this.clickInput.emit();
    }
    if (event['className'].indexOf('form-change-password__input') >= 0) {
      this.clickInput.emit();
    }
  }
}
