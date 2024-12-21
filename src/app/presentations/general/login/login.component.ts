import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [    CommonModule, FormsModule  // Correction ici
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  loginUser:any[]= [];
    login: any={
    email: '',
    password:''

  };

 

  constructor() {}

  ngOnInit(): void {
    
  }

 onLogin() {
  this.loginUser.push(this.login);
  this.login={
    email:'',
    password:''
  }

 }
}