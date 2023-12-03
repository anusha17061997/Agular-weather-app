import { Component, Input } from '@angular/core';
import { weatherDescriptions } from 'src/app/constants/constants';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  @Input() weatherData:any = "";
  public dateTime: any;
  public isLiked: boolean = false;
  public key = 'likedItems';
  public weatherConstants: any = weatherDescriptions;
  public tempSelected:number = 1;
  public temparature:any;
  public temparatureCel:any;
  public temparatureFah:any;


  constructor(private storageService:StorageService) {

  }

  ngOnChanges() {
    this.dateTime = new Date(this.weatherData.location.localtime_epoch*1000).toLocaleString();
    this.temparature = this.weatherData.current.temperature;
    this.temparatureCel = this.weatherData.current.temperature;
    this.temparatureFah = ((this.temparature * 1.8) + 32).toFixed(1);
    let likedItems:any =  this.storageService.getItem(this.key) || '[]';
    likedItems = JSON.parse(likedItems);
    this.isLiked = likedItems.filter((data:any) => this.weatherData.location.name===data.location.name).length > 0 ? true : false;
  }

  toggleLike() {
    let likedItems:any =  this.storageService.getItem(this.key) || '[]';
    likedItems = JSON.parse(likedItems);
    console.log(likedItems);
    if(likedItems.find((ele:any) => this.weatherData.location.name===ele.location.name)) {
      likedItems = likedItems.filter((city:any) => city.location.name!=this.weatherData.location.name);
  } else {
    likedItems.push(this.weatherData);
  }
    this.storageService.setItem(this.key, likedItems).then((res) => {
      this.isLiked = !this.isLiked;
    });
  } 

  ontempChange(type:number) {
    if(type===2) {
      this.temparature = this.temparatureFah;
      this.tempSelected = 2;
    } else {
      this.temparature = this.temparatureCel;
      this.tempSelected = 1;
    }
  }

  getImage(desc:any) {
    return this.weatherConstants[desc] ? this.weatherConstants[desc].img : this.weatherConstants["sunny"].img;
  }

}
