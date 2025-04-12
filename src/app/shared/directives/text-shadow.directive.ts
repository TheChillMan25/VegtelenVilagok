import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTextShadow]',
})
export class TextShadowDirective {
  @Input('appTextShadow') textShadowValue: string = '2px 2px 4px #000000';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.setStyle(
      this.el.nativeElement,
      'text-shadow',
      this.textShadowValue
    );
  }
}
