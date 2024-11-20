import { Component } from '@angular/core';
import { ApplicationService } from '../../services/application.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  username: any;
  password: any;
  email: any;

  constructor(private applicationService : ApplicationService){}

  onRegister() {
    console.log('User Registered:', this.username, this.email, this.password);
    // this.applicationService.getRegistrationDetails().subscribe(data=>{

    // });
  }
}
