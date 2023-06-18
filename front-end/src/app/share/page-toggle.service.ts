import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { StopwatchComponent } from '../section/stopwatch/stopwatch.component';

@Injectable(
  // { providedIn: StopwatchComponent }
  )
export class PageToggleService {
  constructor(private router: Router) {}

  routingCount = 0;

  plusCount() {
    this.routingCount++;
  }

  goPage(target: string) {
    this.routingCount++;
    this.router.navigateByUrl(target);
  }
}
