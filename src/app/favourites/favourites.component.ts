import { Component } from '@angular/core';
import { weatherDescriptions } from '../constants/constants';
import { StorageService } from '../services/storage.service';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss'],
})
export class FavouritesComponent {
  public weatherDatas: any = [];
  public weatherConstants: any = weatherDescriptions;
  public popUp: boolean = false;
  public popupTexts: any = {
    text: 'Are you sure want to remove all the favourites?',
    button1: 'YES',
    button2: 'NO',
  };

  constructor(
    private weatherService: WeatherService,
    private storageService: StorageService
  ) {}

  ngOnInit() {
    let key = 'likedItems';
    let likedCities = this.storageService.getItem(key) || '[]';
    this.weatherDatas = JSON.parse(likedCities);
  }

  unlikeAll() {
    let key = 'likedItems';
    let likedItems: any = [];
    this.storageService.setItem(key, likedItems).then((res) => {
      this.weatherDatas = [];
      this.togglePopUp(2);
    });
  }

  togglePopUp(type: number) {
    this.popUp = type === 1 ? true : false;
  }

  getImage(desc: any) {
    return this.weatherConstants[desc]
      ? this.weatherConstants[desc].img
      : this.weatherConstants['sunny'].img;
  }

  // toggleLike(cityData:any) {
  //   let key = 'likedItems';
  //   let likedItems:any =  this.storageService.getItem(key) || '[]';
  //   likedItems = JSON.parse(likedItems);
  //     likedItems = likedItems.filter((city:any) => city.location.name!=cityData.location.name);
  //   this.storageService.setItem(key, likedItems).then((res) => {
  //   });
  // }
}
