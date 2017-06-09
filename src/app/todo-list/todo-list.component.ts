import { Component, OnInit } from '@angular/core';
import { Todo } from '../shared/todo.model';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'ta-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Todo[];
  constructor(private todoService:TodoService) { }

  ngOnInit() {
    this.todos = this.todoService.getAllTodo();

    this.todoService.changedTodosList
      .subscribe(
        (todos: Todo[]) => {
          this.todos = todos;
        }
      )
  }

}
