import { Component, Input } from '@angular/core';
import { TodoModel } from '../shared/models/todo-model';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent {
  @Input() todoItem: TodoModel;
}
