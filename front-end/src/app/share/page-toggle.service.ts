import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { StopwatchComponent } from '../section/stopwatch/stopwatch.component';
import { SectionModule } from '../section/section.module';

@Injectable(
  { 
    providedIn: 'root' 
  }
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
