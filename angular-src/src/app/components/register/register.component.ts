import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import {AuthService} from '../../services/auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email: String;
  username: String;
  password: String;
  passwordConf: String;

  constructor(
    private validateService:ValidateService, 
    private flashMessage:FlashMessagesService,
    private authService:AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onRegisterSubmit(){
    const user = {
      email: this.email,
      username: this.username,
      password: this.password,
      passwordConf: this.passwordConf
    }
     // Required Fields
    if(!this.validateService.validateRegister(user)){
      this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }

    if(!this.validateService.validatePassword(user.password)){
      this.flashMessage.show('Passwords dont match', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }
    // Validate Email
    if(!this.validateService.validateEmail(user.email)){
      this.flashMessage.show('Please use a valid email', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }

    // Register user
    this.authService.registerUser(user).subscribe(data => {
      if(data.success){
        this.flashMessage.show('You are now registered and can log in', {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/login']);
      } else {
        console.log('TRYING TO GO WRONG');
        this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
        this.router.navigate(['/register']);
      }
    });

  }  

}
