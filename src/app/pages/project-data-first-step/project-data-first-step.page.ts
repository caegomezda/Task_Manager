import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
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
  projectName:string = ""
  projectDescription:string = ""
  constructor(
    private navCtrl: NavController,
    private toolManager: AppToolManagerService,
    ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.newFormGetter()
  }

  async newFormGetter(){
    this.projectForm = await this.toolManager.temporalStorageManager("ProjectFormBuilderGetter",null)
    console.log(this.projectForm);
    
  }

  async addTaksClick(){
    await this.projectSubmit()
    this.navCtrl.navigateForward('/project-data-second-step');
  }

  customCounterFormatter(inputLength: number, maxLength: number) {
    return `${maxLength - inputLength} characters remaining`;
  }

  taskEdit(task:any){
    console.log(task);
    this.navCtrl.navigateForward('/project-data-second-step');
  }

  nextStepProject(){
    console.log("Project saved");
  }

  projectSubmit(){
    const formData = {
      projectName: this.projectName,
      projectDescription: this.projectDescription,
      // Add other form fields if needed
    };
  }
}
