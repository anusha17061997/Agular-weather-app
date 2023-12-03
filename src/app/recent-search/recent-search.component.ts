import { Component } from '@angular/core';
import { weatherDescriptions } from '../constants/constants';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-recent-search',
  templateUrl: './recent-search.component.html',
  styleUrls: ['./recent-search.component.scss'],
})
export class RecentSearchComponent {
  public recentSearch: any = [];
  public weatherConstants: any = weatherDescriptions;
  public popUp: boolean = false;
  public likedDatas: any = [];
  public popupTexts: any = {
    text: 'Are you sure want to remove all the Searches?',
    button1: 'YES',
    button2: 'NO',
  };

  constructor(private storageService: StorageService) {}

  ngOnInit() {
    let searchedCities = this.storageService.getItem('recentSearch') || '[]';
    this.recentSearch = JSON.parse(searchedCities);

    let likedCities = this.storageService.getItem('likedItems') || '[]';
    this.likedDatas = JSON.parse(likedCities);
  }

  deleteAll() {
    let key = 'recentSearch';
    let searchedItems: any = [];
    this.storageService.setItem(key, searchedItems).then((res) => {
      this.recentSearch = [];
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

  getLikeImage(city: any) {
    let key = 'likedItems';
    if (
      this.likedDatas.find(
        (likedCity: any) => city.location.name === likedCity.location.name
      )
    ) {
      return '../../../assets/Home/like.png';
    } else {
      return '../../../assets/Home/unlike.png';
    }
  }
}
