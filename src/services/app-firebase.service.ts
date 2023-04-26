import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppFirebaseService {

  constructor(
  ) { }

  async firebaseManager(item:string,params:any){
    let result = "Firebase Manager"
    return await result
  }

}
