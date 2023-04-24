import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  items: string[] = ["project 1","project 2","project 3"];
  constructor(private navCtrl: NavController) { }


  addItem() {
    this.navCtrl.navigateForward('/project-data-first-step');
  }

  onClick(item:any){
    this.navCtrl.navigateForward('/project-data-visualized');

  }
}
