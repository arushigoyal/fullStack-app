import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  username: any;
  password: any;
  email: any;

  onRegister() {
    console.log('User Registered:', this.username, this.email, this.password);
  }
}
