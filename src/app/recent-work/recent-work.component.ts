import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-recent-work',
  templateUrl: './recent-work.component.html',
  styleUrls: ['./recent-work.component.css'],
})
export class RecentWorkComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    gsap
      .timeline({
        defaults: { duration: 0.4 },
        scrollTrigger: {
          trigger: '.recent-work',
          start: 'top 80%',
          //markers: true,
        },
      })
      .from('.recent-work > a', {
        scale: 0.5,
        y: 24,
        opacity: 0,
        ease: 'back.out(1.6)',
      });
  }
}
