import { Directive, ElementRef, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { CoreAnimationDirective } from './core-animation.directive';

@Directive({
  selector: '[fadeInAnimation]',
})
export class FadeInAnimationDirective
  extends CoreAnimationDirective
  implements OnInit
{
  constructor(protected element: ElementRef) {
    super(element);
  }

  ngOnInit() {
    // perform animation
    this.animateIn();
  }

  protected animateIn() {
    this.timeline.from(this.element.nativeElement, {
      opacity: 0,
      ease: 'power1.easeInOut',
      duration: this.duration,
      delay: this.delay,
    });
    super.animateIn();
  }
}
