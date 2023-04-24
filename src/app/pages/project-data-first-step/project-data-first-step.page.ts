import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-project-data-first-step',
  templateUrl: './project-data-first-step.page.html',
  styleUrls: ['./project-data-first-step.page.scss'],
})
export class ProjectDataFirstStepPage implements OnInit {
  items: string[] = ["task 1","task 2","task 3"];
  newItem: string = '';
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  customCounterFormatter(inputLength: number, maxLength: number) {
    return `${maxLength - inputLength} characters remaining`;
  }

  taskEdit(item:any){
    console.log(item);
    this.navCtrl.navigateForward('/project-data-second-step');

  }
  nextStepProject(){
    console.log("Project saved");
  }
}
