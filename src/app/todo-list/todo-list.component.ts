import { Component } from '@angular/core';
import { TodoModel } from '../shared/models/todo-model';
import { TodoService } from '../shared/services/todo.service';
import { v4 as uuidv4 } from 'uuid';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent {

  todoList: TodoModel[];

  todoForm = new FormGroup({
    description: new FormControl('', Validators.required),
    done: new FormControl(false, Validators.requiredTrue),
  });

  constructor(private service: TodoService){
    this.todoList = service.getTodoList();
  }

  deleteItem(id: string){
    this.service.deleteTodoItem(id);
    this.todoList = this.service.getTodoList();
  }

  addItem(){
    console.log("Add item")
    console.log(this.todoForm);
    let newItem: TodoModel = {
      id: uuidv4(),
      description: this.todoForm.value.description,
      done: this.todoForm.value.done
    }
    
    this.service.addTodoItem(newItem);
  }

  editItem(item: TodoModel){
    item.description = "New Item description";

    this.service.updateTodoItem(item);
  }
}
