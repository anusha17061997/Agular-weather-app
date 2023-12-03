import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'weather-app';
  public showSplash = true;

  ngOnInit() {
    console.log('ng on init');
    setTimeout(() => {
      this.showSplash = false;
    }, 3000);
  }
}
