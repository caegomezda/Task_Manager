import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppApiService {

  constructor() { }

  apiManager(items:string, parmas:any){
    let result = "Api Manager"
    return result
  }
}
