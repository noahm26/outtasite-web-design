import { Component, OnInit } from '@angular/core';
import { StateService } from '../services/state.service';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
gsap.registerPlugin(SplitText);

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private state: StateService) {}

  ngOnInit(): void {
    const headline = document.getElementById('site-description');
    const split = new SplitText(headline, { type: 'chars' });
    gsap
      .timeline({
        onComplete: () => {
          split.revert();
          this.state.setLogoPlayed(true);
        },
      })
      .from(split.chars, {
        opacity: 0,
        y: '+=10',
        delay: 0.6,
        duration: 0.3,
        ease: 'back.out(1.7)',
        stagger: 0.04,
      });
  }
}
