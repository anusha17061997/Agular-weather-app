import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { weatherAPI } from '../constants/apiconstants';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeathertData(location: any) {
    return this.http.get(weatherAPI.getWeather + '&query=' + location);
  }
}
