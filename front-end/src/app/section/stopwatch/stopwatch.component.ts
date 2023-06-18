import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PageToggleService } from 'src/app/share/page-toggle.service';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss'],
  // providers: [
  //   PageToggleService
  // ],
})
export class StopwatchComponent {
  constructor(
    private router: Router,
    public pageToggleService: PageToggleService
  ) {}
  present: string = 'welcome';

  declare commandText: string;

  goClock() {
    this.pageToggleService.goPage('/clock');
  }

  startTime($event: string) {
    this.present = $event;
  }
}
