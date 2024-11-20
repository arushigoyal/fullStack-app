import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: any;
  password: any;

  onLogin() {
    console.log('User Logged In:', this.username, this.password);
    // Implement login logic (API call, form validation, etc.)
  }
}
