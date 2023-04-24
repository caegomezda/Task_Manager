import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {
  email: string = '';
  password: string = '';

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  signIn() {
    // Here you would handle the login process, such as sending the credentials to a server and verifying them
    // If the login is successful, you would navigate to the next page
    this.navCtrl.navigateForward('/home');
  }
}
