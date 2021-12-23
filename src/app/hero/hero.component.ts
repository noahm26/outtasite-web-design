import { Component, OnInit } from '@angular/core';
import { StateService } from '../services/state.service';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
gsap.registerPlugin(SplitText);

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit {
  showP = true;
  animationDelay = 1.6;
  animationComplete = false;

  constructor(private state: StateService) {}

  ngOnInit(): void {
    this.animationComplete = this.state.getLogoPlayed();
    if (this.animationComplete === true) {
      this.animationDelay = 0;
    }
    const tagline = document.getElementById('tagline');
    const split = new SplitText(tagline, { type: 'lines' });

    const tlScreensIn = gsap
      .timeline()
      .from('.laptop', {
        x: 800,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
      })
      .from(
        '.ipad',
        { x: 800, opacity: 0, duration: 0.9, ease: 'power3.out' },
        '<0.3'
      )
      .from(
        '.iphone',
        { x: 800, opacity: 0, duration: 1.1, ease: 'power3.out' },
        '<0.3'
      );

    const tlTextIn = gsap
      .timeline()
      .from(split.lines, {
        opacity: 0,
        scaleY: 0,
        duration: 0.6,
        ease: 'back.out(0.6)',
        stagger: 0.08,
        //onComplete: () => split.revert(),
      })
      .from(
        '.intro p',
        {
          opacity: 0,
          y: -12,
          duration: 0.8,
          ease: 'power3.out',
        },
        '>-0.3'
      )
      .from(
        '.intro a',
        {
          opacity: 0,
          y: -12,
          duration: 0.8,
          ease: 'power3.out',
        },
        '<'
      );

    const tlMaster = gsap
      .timeline({ delay: this.animationDelay })
      .add(tlScreensIn)
      .add(tlTextIn, '>-0.7');
  }
}
