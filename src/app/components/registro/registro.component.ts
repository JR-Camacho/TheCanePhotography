import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
    if( sessionStorage.getItem('token') == null) this.router.navigate(['/ingresar'])
    this.headers = new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    });
  }

  headers:any;
  user:User = new User;
  errors: any;
  isError: boolean;
  isLoading = false;
 
  register(){
    this.isLoading = true;
    this.authService.register(this.user, this.headers).subscribe(res => {
      console.log(res);
      this.isLoading = false;
      this.router.navigate(['/profile']);
    }, err => {
      console.log(err)
      this.errors = err.error.errors;
      this.isError = true;
      this.isLoading = false;
    });
  }

}
