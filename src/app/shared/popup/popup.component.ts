import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent {
  @Input() public popupTexts: any = {};
  @Output() public onButton1Click = new EventEmitter();
  @Output() public onButton2Click = new EventEmitter();

  ngOnChanges() {
    console.log(this.popupTexts);
  }

  button1Click() {
    this.onButton1Click.emit('no clicked');
  }

  button2Click() {
    this.onButton2Click.emit('yes clicked');
  }
}
