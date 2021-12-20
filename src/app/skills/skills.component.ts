import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const skills = document.querySelectorAll('.skill');
    skills.forEach((element) => {
      const icon = element.querySelector('.icon');
      const h3 = element.querySelector('h3');
      const li = element.querySelectorAll('li');

      gsap
        .timeline({
          defaults: { duration: 0.4 },
          scrollTrigger: {
            trigger: element,
            start: 'top 70%',
            //markers: true,
          },
        })
        .from(icon, {
          scale: 0,
          rotation: -180,
          ease: 'back.out(1.6)',
        })
        .from(h3, { opacity: 0, y: 24, duration: 0.6, ease: 'power1.out' }, '<')
        .from(
          li,
          {
            opacity: 0,
            y: 24,
            duration: 0.6,
            ease: 'power1.out',
            stagger: 0.2,
          },
          '<0.4'
        );
    });
  }
}
