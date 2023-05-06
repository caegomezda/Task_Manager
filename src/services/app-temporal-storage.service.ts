import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppTemporalStorageService {
  userData:any = ""
  formProject:any = {}
  constructor() { }

  async temporalStorageManager(item:string,params:any){
    switch (item) {
      case "DataUserExtractor":
        return await this.UserDataSaver(params)
      case "UserDataGetter":
        return await this.UserDataGetter()
      case "ProjectFormBuilderSaver":
        return await this.ProjectFormBuilderSaver(params)
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

  async ProjectFormBuilderSaver(params:any){
    this.formProject = params
  }

  async ProjectFormBuilderGetter(){
    return this.formProject
  }

}
