import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AppToolManagerService } from 'src/services/app-tool-manager.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  items: string[] = ["project 1","project 2","project 3"];
  constructor(
    private navCtrl: NavController,
    private toolManager: AppToolManagerService,
    ) { }


    async addNewProject() {
    let result = await this.toolManager.projectBuilderManager("FormNewProjectBuilder",null)  
    await this.toolManager.temporalStorageManager("ProjectFormBuilderSaver",result)
    console.log(result);
    
    this.navCtrl.navigateForward('/project-data-first-step');
  }

  onClick(item:any){
    this.navCtrl.navigateForward('/project-data-visualized');
  }
}
