import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppAuthService {

  constructor() { }
 
  authManager(item:string,params:any){
    let result = "Auth Manager"
    return result
  }
} 
