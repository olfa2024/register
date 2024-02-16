// register.component.ts
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user = {
    email: '',
    password: ''
  };

  constructor(private http: HttpClient) { }

  registerUser() {
    this.http.post<any>('/api/users/register', this.user)
      .subscribe(
        res => {
          console.log(res);
          // Handle success, maybe redirect to login page
        },
        err => console.log(err)
      );
  }
}
