import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: String;
  password: String;

  constructor(
    private authService:AuthService,
    private router:Router,
    private flashMessage:FlashMessagesService,
   // public thisDialogRef: MdDialogRef<LoginComponent>, @Inject(MD_DIALOG_DATA) public data: string
  ) { 
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundColor = "#1289e8";
    document.body.style.backgroundSize = "cover";

  }


  ngOnInit() {
  }

    onLoginSubmit(){
    const user = {
      email: this.email,
      password: this.password
    }


    this.authService.authenticateUser(user).subscribe(data => {
      if(data.success){
        this.authService.storeUserData(data.token, data.user);
        this.flashMessage.show('You are now logged in', {
          cssClass: 'alert-success',
          timeout: 5000});
          this.router.navigate(['map-page']);
      } else {
        this.flashMessage.show(data.msg, {
          cssClass: 'alert-danger',
          timeout: 5000});
        this.router.navigate(['login']);
      }
    });
  }
}
