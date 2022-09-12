import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private userService:UserService, private router:Router) { }

  ngOnInit(): void {
    this.password = sessionStorage.getItem('password');
    sessionStorage.getItem('token') == null? this.router.navigate(['/ingresar']): this.getMyProfile();
  }

  user:any;
  userForUpdate:User = new User();
  headers:any;
  password:any;

  getMyProfile(){
    this.headers = new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    });
    this.userService.getUserProfile(this.headers).subscribe(res => {
      console.log(res);
      this.user = res;
      this.userForUpdate.id = this.user.id;
      this.userForUpdate.name = this.user.name;
      this.userForUpdate.password = this.password;
    }, err => {
      console.log(err);
    })
  }

  updateMyProfile(){
    this.headers = new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    });
    this.userService.updateUserProfile(this.headers, this.userForUpdate).subscribe(res => {
      console.log(res)
      this.getMyProfile();
    }, 
    err => console.log(err));
  }

}
