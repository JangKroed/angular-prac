import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { PageToggleService } from 'src/app/share/page-toggle.service';

@Component({
  selector: 'app-time-display',
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.scss'],
  // providers: [
  //   PageToggleService
  // ]
})
export class TimeDisplayComponent implements OnInit {
  @Input() declare inputData: string;

  min: number = 0;
  sec: number = 0;
  ms: number = 0;

  declare timeInterval: any;

  constructor() // public pageToggleService: PageToggleService
  {
    // setInterval(() => {
    //   this.test++;
    // }, 1000);
    console.log(this.inputData);
  }

  timeStart() {
    // this.pageToggleService.plusCount();

    this.timeStop();
    this.timeInterval = setInterval(() => {
      this.ms++;
      if (this.ms >= 100) {
        this.ms = 0;
        this.sec++;
      }

      if (this.sec >= 60) {
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

  // 속성 바인딩, 부모로부터 받은 값이 변화가 이뤄질때 실행
  ngOnChanges(changes: SimpleChanges) {
    console.log('ng on chages');
    for (let propName in changes) {
      /*let chng = changes[promName]; 
      let cur = JSON.stringify(chag.currentValue);
      let prev = JSON.stringify(chag.previousValue);
      this.changeLog.push(`propName: currentValue = cur, previousValue = prev`)*/
    }
  }
  // 컴포넌트가 생성될때, constructor말고 여기서 사용. Start ?
  ngOnInit() {
    console.log('ng on init');
  }
  // 컴포넌트 내 데이터가 바뀔때 호출됨. Update ?
  ngDoCheck() {
    console.log('ng do check');
  }
  // 
  ngAfterContentInit() {
    console.log('ng after content init');
  }
  ngAfterContentChecked() {
    console.log('ng after content checked');
  }
  ngAfterViewInit() {
    console.log('ng after view init');
  }
  ngAfterViewChecked() {
    console.log('ng after view checked');
  }
  ngOnDestroy() {
    console.log('destroy!');
  }
}
