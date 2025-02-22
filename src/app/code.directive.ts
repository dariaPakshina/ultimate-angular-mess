import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[code]',
  standalone: true,
})
export class CodeDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.padding = '0.75rem';
    el.nativeElement.style.fontFamily = 'monospace';
    // el.nativeElement.style.color = '#66a80f';
    el.nativeElement.style.border = '1px solid var(--tui-border-normal)';
    el.nativeElement.style.borderRadius = '1rem';
  }
}
