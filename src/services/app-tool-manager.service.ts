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

  apiManager(item:string,paramas:any){
    let result = this.api.apiManager(item,paramas)
    return result
  }

  authManager(item:string,paramas:any){
    let result = this.auth.authManager(item,paramas)
    return result
  }

  firebaseManager(item:string,paramas:any){
    let result = this.firebase.firebaseManager(item,paramas)
    return result
  }

  localStorageManager(item:string,paramas:any){
    let result = this.localStorage.localStorageManager(item,paramas)
    return result
  }

  logManager(item:string,paramas:any){
    let result = this.log.logManager(item,paramas)
    return result
  }

  temporalStorageManager(item:string,paramas:any){
    let result = this.temporalStorage.temporalStorageManager(item,paramas)
    return result
  }

  utilitiesManager(item:string,paramas:any){
    let result = this.utilities.utilitiesManager(item,paramas)
    return result
  }
  

}
