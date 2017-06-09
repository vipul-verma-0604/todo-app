import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../shared/todo.model';
import { TodoService } from '../../shared/todo.service';

@Component({
  selector: 'tr.ta-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() todo: Todo;
  @Input() index: number;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  onEdit(index: number){
    this.todoService.selectedTodo.next(index);
  }

  onDelete(index: number) {
    this.todoService.deleteTodo(index);
  }

}
