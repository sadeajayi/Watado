import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  email: String;
  constructor( private authService:AuthService,
    private router:Router,
    private flashMessage:FlashMessagesService) { }

  ngOnInit() {
  }
  onForgotClick(){
    //Place Logic Here
  }
}
