import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from '../shared/todo.model';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'ta-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @ViewChild('f') todoForm: NgForm;
  editMode: boolean = false;
  editedIndex: number;
  editedTodo: Todo;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.selectedTodo
      .subscribe(
        (index: number) => {
          this.editMode = true;
          this.editedIndex = index;
          this.editedTodo = this.todoService.getTodo(index);
          this.todoForm.setValue({
            name: this.editedTodo.name,
            description: this.editedTodo.description
          })
        }
      );
  }

  onSubmit(){
    const todoFormValue = this.todoForm.value;
    const newTodo = new Todo(todoFormValue.name, todoFormValue.description);

    if(this.editMode) {
      this.todoService.updateTodo(this.editedIndex, newTodo);
    } else {
      this.todoService.addTodo(newTodo);
    }

    this.todoForm.reset();
    this.editMode = false;
  }

}
