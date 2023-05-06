import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-custom-alert',
  templateUrl: './custom-alert.component.html',
  styleUrls: ['./custom-alert.component.scss'],
})
export class CustomAlertComponent  implements OnInit {

  constructor(private alertController: AlertController) {}
  
  ngOnInit() {}
  
  async showAlert() {
    const alert = await this.alertController.create({
      header: 'Custom Alert',
      message: 'This is a customized alert!',
      buttons: ['OK']
    });

    await alert.present();
  }

}
