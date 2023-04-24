import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  items: string[] = ["project 1","project 2","project 3"];
  newItem: string = '';
  constructor(private navCtrl: NavController) { }


  addItem() {
    // if (this.newItem !== '') {
    //   this.items.push(this.newItem);
    //   this.newItem = '';
    // }
    this.navCtrl.navigateForward('/project-data-first-step');
  }

  onClick(item:any){
    console.log(item);
    this.navCtrl.navigateForward('/project-data-visualized');

  }
}
