import { Component, OnInit } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-project-data-fourth-step',
  templateUrl: './project-data-fourth-step.page.html',
  styleUrls: ['./project-data-fourth-step.page.scss'],
})
export class ProjectDataFourthStepPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ionViewDidLeave(){
    console.log("exit window");
  }

  customCounterFormatter(inputLength: number, maxLength: number) {
    return `${maxLength - inputLength} characters remaining`;
  }

  saveEstimatedTime(){
    console.log("Save estimated time");
  }
}
