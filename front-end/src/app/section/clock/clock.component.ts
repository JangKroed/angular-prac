import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { Observable, interval } from 'rxjs';
import { map, distinctUntilChanged } from 'rxjs/operators';
import { PageToggleService } from 'src/app/share/page-toggle.service';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss'],
})
export class ClockComponent {
  constructor(
    private router: Router,
    private pageToggleService: PageToggleService
  ) {
    // setInterval(() => {

    // }, 1000)
    interval(1000)
      .pipe(
        map(() => {
          return moment().format('YYYY-MM-DD HH:mm:ss');
        })
      )
      .subscribe((data) => {
        this.timeString = data;
      });
  }
  declare timeString: string;

  goStopwatch() {
    this.pageToggleService.goPage('/stopwatch');
  }

  //  getCurrentTime() {
  //   return moment().format('YYYY-MM-DD HH:mm:ss');
  //  }
}
