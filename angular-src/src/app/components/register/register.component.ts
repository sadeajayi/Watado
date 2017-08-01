import { Component, OnInit } from '@angular/core';
import { FacebookService, LoginResponse } from 'ngx-facebook';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb: FacebookService) { 

    console.log('Initializing Facebook');

    fb.init({
      appId: '1927971220769787',
      version: 'v2.9'
    });
  }
   /**
   * Login with minimal permissions. This allows you to see their public profile only.
   */
  login() {
    this.fb.login()
      .then((res: LoginResponse) => {
        console.log('Logged in', res);
      })
      .catch(this.handleError);
  }

  firstname: String;
  lastname: String;
  email: String;
  password: String;
 

  ngOnInit() {
  }


  private handleError(error) {
    console.error('Error processing action', error);
  }

}
