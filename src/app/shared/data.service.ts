import { Injectable } from '@angular/core';
import { Todo } from './todo.module';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  todos: Todo[] = [
   new Todo('this is a test'),
   new Todo('Lorem ipsum and lorem ipsum and lorem ispum Lorem ipsum and lorem ipsum and lorem ispum Lorem ipsum and lorem ipsum and lorem ispum')
  ]; 

  constructor() { } 

  getAllTodos() {
    return this.todos
  }

  addTodo(todo: Todo) {
    this.todos.push(todo)
  }

  updateTodo(index: number, updatedTodo: Todo){
   this.todos[index] = updatedTodo
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1)
  }
}
