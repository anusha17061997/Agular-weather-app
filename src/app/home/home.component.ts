import { Component } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public currentWeather: any;
  public showSideNav: boolean = false;

  constructor(
    private weatherService: WeatherService,
    private _location: Location
  ) {}

  ngOnInit() {
    let routeState: any = this._location.getState();
    let city = routeState.search ? routeState.search : 'Udupi';
    this.weatherService.getWeathertData(city).subscribe((data) => {
      console.log(data);
      return (this.currentWeather = data);
    });
  }

  toggleSideNav() {
    this.showSideNav = !this.showSideNav;
  }
}
