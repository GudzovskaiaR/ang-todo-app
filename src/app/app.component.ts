import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'My Angulat todos app';

  isAlert = true;

  constructor(private http: HttpClient) {}
  // ngOnInit() {
  //   this.http
  //     .get('https://jsonplaceholder.typicode.com/todos')
  //     .subscribe((todos) => {
        
  //     });
  // }

  tooogleAlert() {
    this.isAlert = !this.isAlert;
  }
}
