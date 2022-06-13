import {Directive, ElementRef} from '@angular/core';


@Directive({
  selector: '[appPasswordInputDirective]'
})
export class AppPasswordInputDirective {
  private _shown = false;

  constructor(private elRef: ElementRef) {
    const parent = this.elRef.nativeElement.parentNode;
    const eye = document.createElement('span');
    eye.className = 'password-field-eye';
    eye.addEventListener('click', () => {
      this.toggle();
    });
    parent.appendChild(eye);
  }

  toggle() {
    this._shown = !this._shown;
    this._shown ? this.elRef.nativeElement.setAttribute('type', 'text') : this.elRef.nativeElement.setAttribute('type', 'password');
  }
}
