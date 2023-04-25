import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppUtilitiesService {

  constructor() { }

  utilitiesManager(item:string,params:any){
    let result = "Utilities Manager"
    return result
  }
}
