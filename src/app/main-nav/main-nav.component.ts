import { Component, OnDestroy, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { fromEvent, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css'],
})
export class MainNavComponent implements OnInit, OnDestroy {
  showingMenu = false;
  open = false;
  items: HTMLElement[] = [];
  resizeObservable$: Observable<Event> | undefined;
  resizeSubscription$: Subscription | undefined;
  responsive = false;

  constructor() {}

  ngOnInit(): void {
    this.checkWindowWidth();

    this.resizeObservable$ = fromEvent(window, 'resize');
    this.resizeSubscription$ = this.resizeObservable$.subscribe((evt) => {
      this.checkWindowWidth();
    });
  }

  ngOnDestroy(): void {
    if (this.resizeSubscription$) {
      this.resizeSubscription$.unsubscribe();
    }
  }

  checkWindowWidth() {
    const docWidth = document.body.clientWidth;
    if (docWidth <= 600 && this.responsive === false) {
      this.setResponsive();
    } else if (docWidth > 600 && this.responsive === true) {
      this.setNormal();
    }
  }

  setResponsive() {
    const container = document.querySelector('.menu-container')!;
    const elements = container.querySelectorAll('li');
    elements.forEach((element: HTMLElement, i: number) => {
      gsap.set(element, { y: -48 * (i + 1), zIndex: elements.length - i });
      this.items.push(element);
    });
    this.responsive = true;
  }

  setNormal() {
    const container = document.querySelector('.menu-container')!;
    const elements = container.querySelectorAll('li');
    elements.forEach((element: HTMLElement, i: number) => {
      gsap.set(element, { y: 0, zIndex: elements.length - i });
    });
    this.items = [];
    this.showingMenu = false;
    this.open = false;
    this.responsive = false;
  }

  toggleMenu() {
    this.showingMenu = !this.showingMenu;
    if (this.showingMenu) {
      this.openMenu();
    } else {
      this.closeMenu();
    }
  }

  openMenu() {
    if (this.items.length > 0) {
      this.open = true;
      gsap.timeline({}).to(this.items, {
        y: 0,
        duration: 0.4,
        ease: 'power3.out',
        stagger: 0.1,
      });
    }
  }

  closeMenu() {
    if (this.items.length > 0) {
      this.open = false;
      gsap.timeline().to(this.items, {
        y: (i) => -48 * (i + 1),
        duration: 0.4,
        ease: 'power3.out',
        stagger: -0.04,
      });
    }
  }
}
