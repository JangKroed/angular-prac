import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent {
  constructor() {

  }
  
  @Output() clickEvent = new EventEmitter<string>();


  excuteButton(command: string) {
    this.clickEvent.emit(command);
  }
}