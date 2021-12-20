import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-call-to-action',
  templateUrl: './call-to-action.component.html',
  styleUrls: ['./call-to-action.component.css'],
})
export class CallToActionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    gsap
      .timeline({
        defaults: { duration: 0.4 },
        scrollTrigger: {
          trigger: '.call-to-action',
          start: 'top 80%',
          //markers: true,
        },
      })
      .from('.call-to-action > a', {
        scale: 0.5,
        y: 24,
        opacity: 0,
        ease: 'back.out(1.6)',
      });
  }
}
