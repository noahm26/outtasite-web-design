import { Component, OnInit } from '@angular/core';
import { StateService } from '../services/state.service';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
gsap.registerPlugin(SplitText);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  showP = true;
  animationDelay = 1.6;
  animationComplete = false;

  constructor(private state: StateService) {}

  ngOnInit(): void {}

  toggleP() {
    this.showP = !this.showP;
  }
}
