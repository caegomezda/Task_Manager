import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppLocalStorageService {

  constructor() { }

  localStorageManager(item:string,params:any){
    let result = "Local Storage Manager"
    return result
  }
}
