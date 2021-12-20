import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-svg-site-logo',
  templateUrl: '../../assets/images/outta-site-logo.svg',
  styleUrls: ['./svg-site-logo.component.css'],
})
export class SvgSiteLogoComponent implements OnInit {
  letters = ['#o1', '#u1', '#t1', '#t2', '#a1', '#s1', '#i1', '#t3', '#e1'];
  constructor() {}

  ngOnInit(): void {
    gsap
      .timeline({ delay: 0.3 })
      .from(this.letters, {
        scale: 0,
        rotation: 20,
        transformOrigin: 'center',
        duration: 0.3,
        ease: 'back.out(1.7)',
        stagger: {
          each: 0.05,
          from: 'random',
          ease: 'power1.in',
        },
      })
      .to(
        '#front',
        { strokeWidth: 2, duration: 0.3, ease: 'sine.inOut' },
        '+=0.4'
      )
      .to(
        '#back',
        {
          stroke: '#FFF8DC',
          strokeWidth: 6.5,
          duration: 0.3,
          ease: 'sine.out',
        },
        '<'
      );
  }
}
