import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CustomAlertComponent } from 'src/app/components/custom-alert/custom-alert.component';
import { AppToolManagerService } from 'src/services/app-tool-manager.service';

@Component({
  selector: 'app-project-data-first-step',
  templateUrl: './project-data-first-step.page.html',
  styleUrls: ['./project-data-first-step.page.scss'],
})
export class ProjectDataFirstStepPage implements OnInit {
  taskList: string[] = [];
  newItem: string = '';
  projectForm:any = {}
  constructor(
    private navCtrl: NavController,
    private toolManager: AppToolManagerService,
    public alertComponet: CustomAlertComponent
    ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){

  }

  async newFormGetter(){
     this.projectForm = await this.toolManager.temporalStorageManager("ProjectFormBuilderGetter",null)
  }

  customCounterFormatter(inputLength: number, maxLength: number) {
    return `${maxLength - inputLength} characters remaining`;
  }

  taskEdit(task:any){
    console.log(task);
    this.navCtrl.navigateForward('/project-data-second-step');

  }
  nextStepProject(){
    this.alertComponet.showAlert()  
    console.log("Project saved");
  }
}
