import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { Todo } from '../shared/todo.module';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[] | undefined

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.todos = this.dataService.getAllTodos()
  }

}
