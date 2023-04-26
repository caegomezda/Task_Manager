import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppTemporalStorageService {
  userData:any = ""
  constructor() { }

  async temporalStorageManager(item:string,params:any){
    switch (item) {
      case "DataUserExtractor":
        return await this.UserDataSaver(params)
      case "UserDataGetter":
        return await this.UserDataGetter()
      default:
        return null
     }
  }

  async UserDataSaver(params:any){
    this.userData = params
    return true
  }

  async UserDataGetter(){
    return this.userData
  }
}
