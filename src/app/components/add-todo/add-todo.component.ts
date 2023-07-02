import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
})
export class AddTodoComponent {
  @Output() addTodo: EventEmitter<string> = new EventEmitter();
  todoText = '';

  onAddTodo() {
    this.addTodo.emit(this.todoText);
    this.todoText = '';
  }
}
