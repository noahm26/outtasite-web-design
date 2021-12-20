import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  logoPlayed: boolean = false;

  constructor() {}

  setLogoPlayed(played: boolean) {
    this.logoPlayed = played;
  }

  getLogoPlayed(): boolean {
    return this.logoPlayed;
  }
}
