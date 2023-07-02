import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITodo } from '../models/todo';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  constructor(private http: HttpClient) {}
  fetchTodos(): Observable<ITodo[]> {
    return this.http.get<ITodo[]>(
      'https://jsonplaceholder.typicode.com/todos?_limit=10'
    );
  }
}
