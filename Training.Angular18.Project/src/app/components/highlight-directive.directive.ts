import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightDirective]',
  standalone: true
})
export class HighlightDirectiveDirective {

  @Input() appHighlightDirective = ''; 
  constructor(private el:ElementRef) { }
 
  private Highlight(color:string)
  {
    this.el.nativeElement.style.backgroundColor = color;
  }
 @HostListener('mouseenter') onMouseEnter()
  {
    this.Highlight(this.appHighlightDirective || 'yellow')
  }
   @HostListener('mouseleave') onMouseLeave()
  {
    this.Highlight('')
  }
}
