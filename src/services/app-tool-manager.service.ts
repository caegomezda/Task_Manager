import { Injectable } from '@angular/core';
import { AppApiService } from './app-api.service';
import { AppFirebaseService } from './app-firebase.service';
import { AppLocalStorageService } from './app-local-storage.service';
import { AppTemporalStorageService } from './app-temporal-storage.service';
import { AppUtilitiesService } from './app-utilities.service';
import { AppAuthService } from './app-auth.service';
import { AppSessionService } from './app-session.service';

@Injectable({
  providedIn: 'root'
})
export class AppToolManagerService {

  constructor(
    private api:AppApiService,
    private auth:AppAuthService,
    private firebase:AppFirebaseService,
    private localStorage:AppLocalStorageService,
    private log:AppSessionService,
    private temporalStorage:AppTemporalStorageService,
    private utilities:AppUtilitiesService,
  ) { }

  async apiManager(item:string,params:any){
    return await this.api.apiManager(item,params)
  }

  async authManager(item:string,params:any){
    return await this.auth.authManager(item,params)
  }

  async firebaseManager(item:string,params:any){
    return await this.firebase.firebaseManager(item,params)
  }

  async localStorageManager(item:string,params:any){
    return await this.localStorage.localStorageManager(item,params)
  }

  async logManager(item:string,params:any){
    return await this.log.logManager(item,params)
  }

  async temporalStorageManager(item:string,params:any){
    return await this.temporalStorage.temporalStorageManager(item,params)
  }

  async utilitiesManager(item:string,params:any){
    return await this.utilities.utilitiesManager(item,params)
  }

}
