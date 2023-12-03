import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fheader',
  templateUrl: './fheader.component.html',
  styleUrls: ['./fheader.component.scss'],
})
export class FheaderComponent {
  constructor(private _router: Router) {}

  goBack() {
    this._router.navigate(['/']);
  }
}
