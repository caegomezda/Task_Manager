import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppUtilitiesService {
  userData:any = {}
  constructor() { }

  async utilitiesManager(item:string,params:any){
   switch (item) {
    case "DataUserExtractor":
      return await this.DataUserExtractor(params)
    default:
      return null
   }
  }

  async DataUserExtractor(params:any){
    console.log(params);
    let dataArray = params.object.user._delegate

    console.log(dataArray);
    
    params.params.forEach((element: any) => {
      console.log(element);
      this.userData[element]=dataArray[element]
      
    });
    console.log(this.userData);
    
  }
}
