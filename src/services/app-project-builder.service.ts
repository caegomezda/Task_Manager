import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppProjectBuilderService { 
  newProjectJsonForm:any = {}
  newTaskJsonForm:any = {}
  constructor() { }

  async ProjectBuilderManager(item:string,params:any){
    switch (item) {
      case "FormNewProjectBuilder":
        return await this.FormNewProjectBuilder(params)
      case "AddParamsForm":
          return await this.AddParamsForm(params)
      case "AddTask2Form":
            return await this.AddTask2Form(params)
      default:
        return null
     }
  }
  
  async FormNewProjectBuilder(params:any){
      this.newProjectJsonForm = {}
      this.newProjectJsonForm = {
        "name":"",
        "description":"",
        "startedDate":"",
        "endDate":"",
        "taskList":[]
      }
    return this.newProjectJsonForm
  }

  async FormNewTaskBuilder(params:any){
    this.newTaskJsonForm = {}
    this.newTaskJsonForm = {
      "name":"",
      "description":"",
      "startedDate":"",
      "endDate":"",
      "subTaskList":[]
    }
  return this.newProjectJsonForm
}

//Analizar la posibilidad de actulizarlo en cualquier parte del codigo
  async AddParamsForm(params:any){
      this.newProjectJsonForm.name = params.name
      this.newProjectJsonForm.description = params.description
      this.newProjectJsonForm.startedDate = params.startedDate
      this.newProjectJsonForm.endDate = params.endDate
      return this.newProjectJsonForm
  }

  async AddTask2Form(params:any){
    this.newProjectJsonForm.taskList
  }

}
