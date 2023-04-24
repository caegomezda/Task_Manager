import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { log } from 'console';

@Component({
  selector: 'app-project-data-second-step',
  templateUrl: './project-data-second-step.page.html',
  styleUrls: ['./project-data-second-step.page.scss'],
})
export class ProjectDataSecondStepPage implements OnInit {
  items: string[] = ["Sub task 1","Sub task 2","Sub task 3"];
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  customCounterFormatter(inputLength: number, maxLength: number) {
    return `${maxLength - inputLength} characters remaining`;
  }

  subTaskEdit(item:any){
    console.log(item);
    //for this step need too creat a task id and replace it in the toolsManger 
    this.navCtrl.navigateForward('/project-data-third-step');
  }

  saveTask(){
    console.log("task saved");
  }

  estimatedTime(){
    console.log("Estimated time");
    
  }

}
