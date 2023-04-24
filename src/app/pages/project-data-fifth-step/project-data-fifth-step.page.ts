import { Component, OnInit } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-project-data-fifth-step',
  templateUrl: './project-data-fifth-step.page.html',
  styleUrls: ['./project-data-fifth-step.page.scss'],
})
export class ProjectDataFifthStepPage implements OnInit {

  itemList: any[] = ["Sub task 1","Sub task 2","Sub task 3"];


  items: any[] = [
    { name: 'Task 1', showListFlag: false, subtasks:["Subtask A 1","Subtask A 2","Subtask A 3"] },
    { name: 'Task 2', showListFlag: false, subtasks:["Subtask B 1","Subtask B 2","Subtask B 3"] },
    { name: 'Task 3', showListFlag: false, subtasks:["Subtask C 1","Subtask C 2","Subtask C 3"] }
  ];
  constructor() { }

  ngOnInit() {
  }

  showList(item:any){
    this.items.forEach(element => {
      if(element.name === item.name){
        element.showListFlag = !element.showListFlag; 
      }
    });
  }

}
