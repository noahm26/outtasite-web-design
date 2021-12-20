import {
  Directive,
  ElementRef,
  EmbeddedViewRef,
  Input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { CoreAnimationDirective } from '../gsap/core-animation.directive';

@Directive({
  selector: '[ifAnimated]',
})
export class IfAnimatedDirective {
  childViewRef: EmbeddedViewRef<CoreAnimationDirective> = null as any;

  constructor(
    //private element: ElementRef,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  @Input()
  set ifAnimated(show: boolean) {
    if (show) {
      this.childViewRef = this.viewContainer.createEmbeddedView(
        this.templateRef
      );
    } else {
      if (this.childViewRef) {
        const node = this.childViewRef.rootNodes[0];
        if (node) {
          node.dispatchEvent(
            new CustomEvent('animate-out', {
              detail: { parentViewRef: this.viewContainer },
            })
          );
        }
      }
    }
  }
}
