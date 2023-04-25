import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppSessionService {

  constructor() { }

  logManager(item:string,params:any){
    let result = "Session Manager"
    return result
  }
}
