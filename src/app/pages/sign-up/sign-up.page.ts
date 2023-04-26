import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AppToolManagerService } from 'src/services/app-tool-manager.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  email: string = '';
  password: string = '';

  constructor(
    private navCtrl: NavController,
    private toolManager: AppToolManagerService,
    ) { }

  ngOnInit() {
  }

  async SignUp() {
    // Here you would handle the login process, such as sending the credentials to a server and verifying them
    // If the login is successful, you would navigate to the next page
    let result = await this.toolManager.authManager("SignUp",{"account":{"email":this.email,"password":this.password}});
    console.log(result);
    
    this.navCtrl.navigateForward('/email-verifier');
  }

}
