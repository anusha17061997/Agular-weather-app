import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() public hamburgerEvent = new EventEmitter();

  onHamburgerClick() {
    this.hamburgerEvent.emit();
    console.log("jshdbhjbvhjg")
  }

}
