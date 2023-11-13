import { Injectable } from '@angular/core';
import { TodoModel } from '../models/todo-model';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todoList: TodoModel[] = [
   {id: uuidv4(), description: "description1", done: false},
   {id: uuidv4(), description: "description2", done: true},
   {id: uuidv4(), description: "description3", done: false},
   {id: uuidv4(), description: "description4", done: false}
  ]

  constructor() { }

  getTodoList(){
    return this.todoList;
  }

  deleteTodoItem(id: string){
    this.todoList = this.todoList.filter(e => e.id != id);
  }

  addTodoItem(todiItem: TodoModel){
    this.todoList.push(todiItem);
  }

  updateTodoItem(todoItem: TodoModel){
    let item = this.todoList.find(e => e.id == todoItem.id);
    item.description = todoItem.description;
    item.done = todoItem.done;
  }
}
