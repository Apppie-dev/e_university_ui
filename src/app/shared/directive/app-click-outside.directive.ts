import { Directive, Output, EventEmitter, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appClickOutside]'
})
export class AppClickOutsideDirective {

  @Output() clickOutside: EventEmitter<any> = new EventEmitter();

  constructor(private elRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
  onDocumentClicked(event: Event): void {
    if (!this.elRef.nativeElement.contains(event.target)) {
      this.clickOutside.emit(event);
    }
  }
}
