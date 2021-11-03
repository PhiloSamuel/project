import { Component, OnInit } from '@angular/core';
import {Task} from '../../models/task'
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  name:string="Morcous Wael"
  tasks:Task[]=[]
  constructor() { }

  getPendingTasksCount():number{
    return this.tasks.filter(task=>!task.IsDone).length;
  }
  addTask(title:string){
    let task =new Task();
    task.Title=title;
    this.tasks.push(task);
  }
  updateTask(task:Task){
    task.IsDone=!task.IsDone;
  }
  deleteTask(index:number){
    this.tasks.splice(index,1);
  }
  ngOnInit(): void {
  }

}
