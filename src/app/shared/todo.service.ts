import { Todo } from './todo.model';
import { Subject } from 'rxjs/Subject';

export class TodoService {
    changedTodosList = new Subject<Todo[]>();
    selectedTodo = new Subject<number>();

    private todos: Todo[] = [
        new Todo('First Task','A small description'),
        new Todo('Second Task','A small description'),
        new Todo('Third Task','A small description')
    ]

    getAllTodo(){
        return this.todos.slice();
    }

    getTodo(index: number){
        return this.todos[index];
    }

    addTodo(newTodo: Todo){
        this.todos.push(newTodo);
        this.changedTodosList.next(this.todos.slice());
    }

    updateTodo(index: number, newTodo: Todo) {
        this.todos[index] = newTodo;
        this.changedTodosList.next(this.todos.slice());
    }

    deleteTodo(index: number) {
        this.todos.splice(index, 1);
        this.changedTodosList.next(this.todos.slice());
    }
}