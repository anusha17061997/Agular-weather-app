import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rs-header',
  templateUrl: './rs-header.component.html',
  styleUrls: ['./rs-header.component.scss'],
})
export class RsHeaderComponent {
  constructor(private _router: Router) {}

  goBack() {
    this._router.navigate(['/']);
  }
}
