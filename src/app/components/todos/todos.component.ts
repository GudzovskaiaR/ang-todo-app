import { Component, OnInit } from '@angular/core';
import { ITodo } from 'src/app/models/todo';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {

  todosItem: ITodo[] = [];
  constructor(private todoSrvices: TodosService) {}
  ngOnInit() {
    this.fetchTodos();
  }
  fetchTodos() {
    this.todoSrvices.fetchTodos().subscribe((todos) => {
      this.todosItem = todos;
    });
  }
  toggleComplete(todo: ITodo) {
    todo.completed = !todo.completed;
  }
  delTodo(todo: ITodo) {
    this.todosItem = this.todosItem.filter((itemTodo) => todo !== itemTodo);
  }
  addTodo(title: string) {
    const newTodo = {
      id: this.getId(this.todosItem),
      title,
      completed: false,
    };
    this.todosItem.push(newTodo);
  }
  editTodo(todoData: { text: string; id: number }) {
    this.todosItem.map((todo) => {
      if (todo.id == todoData.id) {
        todo.title = todoData.text;
      }
    });
  }
  private getId(todos: ITodo[]): number {
    return this.todosItem.length ? todos[todos.length - 1].id + 1 : 1;
  }
}
