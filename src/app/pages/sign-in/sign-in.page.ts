import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AppToolManagerService } from 'src/services/app-tool-manager.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {
  email: string = '';
  password: string = '';

  constructor(
    private navCtrl: NavController,
    private toolManager: AppToolManagerService,
    ) { }

  ngOnInit() {
  }

  async SignIn() {
    let userLogResponse = await this.toolManager.authManager("SignIn",{"account":{"email":this.email,"password":this.password}});
    let userData = await this.toolManager.utilitiesManager("DataUserExtractor",{"object": userLogResponse, "params":["email","uid","accessToken"]});
    let response = await this.toolManager.temporalStorageManager("UserDataSaver",userData)
    if(response){
      this.navCtrl.navigateForward('/home');
    }else{
      console.log("Error 0001");
    }
  }
}
