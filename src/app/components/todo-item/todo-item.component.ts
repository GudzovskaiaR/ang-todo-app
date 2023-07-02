import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ITodo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent {
  @Input() todo: ITodo;
  @Input() index: number;

  @Output() toggleComplete: EventEmitter<void> = new EventEmitter();
  @Output() delTodo: EventEmitter<void> = new EventEmitter();
  @Output() editTodo: EventEmitter<{ text: string; id: number }> =
    new EventEmitter();

  isEdit = false;
  todoTextEdit: string;

  ngOnInit() {
    if (this.todo) {
      this.todoTextEdit = this.todo.title;
    }
  }
  onToggleComplete() {
    this.toggleComplete.emit();
  }

  onDelTodo() {
    this.delTodo.emit();
  }

  onEditTodo() {
    this.editTodo.emit({ text: this.todoTextEdit, id: this.todo.id });
    this.isEdit = false;
  }
}
