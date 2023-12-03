import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { locationArray } from '../constants/locations';
import { StorageService } from '../services/storage.service';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  public cityList: any = [];
  public searchKey = 'recentSearch';
  public weatherData: any;

  constructor(
    private _router: Router,
    private storageService: StorageService,
    private weatherService: WeatherService
  ) {}

  onCitySelect(city: any) {
    let searchItems: any = this.storageService.getItem(this.searchKey) || '[]';
    searchItems = JSON.parse(searchItems);
    console.log(searchItems);
    if (searchItems.find((ele: any) => city === ele.location.name)) {
    } else {
      this.weatherService.getWeathertData(city).subscribe((data) => {
        searchItems.push(data);
        this.storageService.setItem(this.searchKey, searchItems).then((res) => {
          console.log('success');
        });
        return;
      });
    }
    this._router.navigateByUrl('/', { state: { search: city } });
  }

  onSearchChange(text: any) {
    console.log(text, this.cityList);
    if (text === '') {
      this.cityList = [];
      return;
    }
    this.cityList = locationArray.filter((location: any) => {
      return location.includes(text);
    });
  }
}
