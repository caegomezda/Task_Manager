import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppTemporalStorageService {

  constructor() { }

  temporalStorageManager(item:string,params:any){
    let result = "Temporal Storage Manager"
    return result
  }
}
