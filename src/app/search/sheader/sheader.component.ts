import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sheader',
  templateUrl: './sheader.component.html',
  styleUrls: ['./sheader.component.scss'],
})
export class SheaderComponent {
  public searchInput: any = '';
  @Output() public onSearchChange = new EventEmitter();

  constructor(private _router: Router) {}

  onSearch(event: any) {
    console.log(event);
    this.searchInput = event;
    this.onSearchChange.emit(this.searchInput);
  }

  clearSearch() {
    this.searchInput = '';
    this.onSearchChange.emit(this.searchInput);
  }

  goBack() {
    this._router.navigate(['/']);
  }
}
