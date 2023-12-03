import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  setItem(key: string, value: any) {
    return new Promise((resolve, reject) => {
      localStorage.setItem(key, JSON.stringify(value));
      resolve('Sucess');
    });
  }

  getItem(key: string) {
    return localStorage.getItem(key);
  }
}
