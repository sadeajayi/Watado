import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username: String;
  email: String;
  password: String;
  passwordConf: String;

  constructor(
    private validateService:ValidateService, 
    private flashMessage:FlashMessagesService,
    private authService:AuthService,
    private router: Router
  ) { 
    //document.body.style.background = "linear-gradient(to right, #ffb75e, #ed8f03)";
    //document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.background = "linear-gradient(to right, #ffb75e, #ed8f03)";
    document.body.style.backgroundSize = "cover";
 
  }

  ngOnInit() {
  }


  onRegisterSubmit(){
    const user = {
      username: this.username,
      email: this.email,
      password: this.password,
      passwordConf: this.passwordConf
    }
     // Required Fields
    if(!this.validateService.validateRegister(user)){
      this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 3000});
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
        this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
        this.router.navigate(['/register']);
      }
    });

  }  

}
