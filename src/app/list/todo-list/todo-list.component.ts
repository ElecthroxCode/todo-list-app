import { CommonModule, JsonPipe } from '@angular/common';
import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit{

  ngOnInit(): void {
    this.loadTasks();
  }
  
  listTask : string[] = [];
  task: string = '';

  styleContainerInput():{[key: string]: string}{
    return {
      'display': 'flex',
      'flex-direction': 'column',
      'gap': '10px',
      'width': '260px'
    }
  }
  styleForLi():{[key: string]: string}{
    return {
      'list-style-type': 'none',
      'font-weight' : 'bold'
    };
  }
  styleBtn():{[key: string]: string}{
    return {
      'cursor' : 'pointer',
      'border' : '1px solid transparent',
      'margin' : '0px 10px'
    }
  }
  loadTasks(){
    const storedTasks = localStorage.getItem('task');
    this.listTask = storedTasks ? JSON.parse(storedTasks) : [] ;
  }
  addTask(){
    if(this.task.length > 0){
      this.task = this.task.charAt(0).toUpperCase() + this.task.slice(1).toLowerCase();
      this.listTask.push(this.task);
      this.task = '';
      this.saveTasks();
    }
  }
  deleteTask(index:number){
    this.listTask.splice(index, 1);
    this.saveTasks();
  }
  saveTasks(){
  localStorage.setItem('taks',  JSON.stringify(this.listTask));
  }

}
