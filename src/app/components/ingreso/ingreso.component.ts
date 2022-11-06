import { BreakpointObserver } from '@angular/cdk/layout';
import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {

  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  user:User = new User;
  userLogged:any;
  errors: any;
  isError: boolean;
  msg:string = ''; 
  isLoading:boolean = false;

  clearMessage(){
    this.msg = '';
  }

  login(){
    this.clearMessage();
    this.isLoading = true;
    this.authService.login(this.user).subscribe(res => {
      this.isLoading = false;
      this.userLogged = Object.values(res);
      console.log(this.userLogged);
      sessionStorage.setItem('token', this.userLogged[2]);
      sessionStorage.setItem('password', this.user.password);
      this.router.navigate(['/profile']);
    }, err => {
      console.log(err);
      this.isLoading = false;
      this.errors = err.error.errors;
      if(!this.errors) err.error.msg ? this.msg = err.error.msg : this.msg = 'Error to start the sesion.';
      this.isError = true;
    })
  }

}
