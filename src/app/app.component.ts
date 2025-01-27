import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoListComponent } from './list/todo-list/todo-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TodoListComponent],
  templateUrl: './app.component.html',
  styles:  `
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
})
export class AppComponent {
  title = 'To-Do List';
}
