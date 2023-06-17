import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-time-display',
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.scss'],
})

export class TimeDisplayComponent implements OnInit {
  @Input() declare inputData: string;

  min: number = 0;
  sec: number = 0;
  ms: number = 0;

  declare timeInterval: any;

  constructor() {
    // setInterval(() => {
    //   this.test++;
    // }, 1000);
    console.log(this.inputData);
  }

  timeStart() {
    this.timeInterval = setInterval(() => {
      this.ms++;
      if (this.ms === 100) {
        this.ms = 0;
        this.sec++;
      }
      if (this.sec === 60) {
        this.sec = 0;
        this.min++;
      }
    }, 10);
  }

  timeStop() {
    clearInterval(this.timeInterval);
  }

  timeReset() {
    this.timeStop();
    this.min = 0;
    this.sec = 0;
    this.ms = 0;
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   // const commandHandler = {
  //   //   'start': this.timeStart(),
  //   // }

  //   for (let propName in changes) {
  //     if (propName == 'inputData') {
  //       switch (changes[propName].currentValue) {
  //         case 'start':
  //           this.timeStart();
  //           break;
  //         case 'stop':
  //           this.timeStop();
  //           break;
  //         case 'reset':
  //           this.timeReset();
  //           break;
  //       }
  //     }
  //   }
  // }

  ngOnInit() {}
}
