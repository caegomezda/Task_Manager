import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-project-data-third-step',
  templateUrl: './project-data-third-step.page.html',
  styleUrls: ['./project-data-third-step.page.scss'],
})
export class ProjectDataThirdStepPage implements OnInit {
  items: string[] = ["Sub task 1","Sub task 2","Sub task 3"];
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  customCounterFormatter(inputLength: number, maxLength: number) {
    return `${maxLength - inputLength} characters remaining`;
  }

  saveSubTask(){
    console.log("Subtask saved");
  }

  estimatedTime(){
    console.log("Estimated time"); 
  }

}
