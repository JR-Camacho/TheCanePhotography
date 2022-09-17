import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { MessagesService } from 'src/app/services/messages.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private userService:UserService, private authService:AuthService, private messagesService:MessagesService, private router:Router) { }

  ngOnInit(): void {
    this.password = sessionStorage.getItem('password');
    sessionStorage.getItem('token') == null? this.router.navigate(['/ingresar']): this.getMyProfile();
    this.getAcounts();
    this.getMessages();
  }

  user:any;
  userForUpdate:User = new User();
  headers:any;
  password:any;
  acounts:any;
  needConfirmation:boolean = false;
  messages:any[];
  counter:number;

  setConfirmation(){
    this.needConfirmation = true;
  }

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

  getAcounts(){
    this.userService.getUsers(this.headers).subscribe(res => {
      console.log(res)
      this.acounts = Object.values(res);
    }, err => console.log(err))
  }

  updateMyProfile(){
    this.userService.updateUserProfile(this.headers, this.userForUpdate).subscribe(res => {
      console.log(res)
      this.getMyProfile();
    }, 
    err => console.log(err));
  }

  deleteAcount(){
    this.authService.deleteAcount(this.headers, this.user.id).subscribe(res => {
      console.log(res);
      sessionStorage.removeItem('token');
      this.router.navigate(['/'])
    }, err => console.log(err));
  }

  getMessages(){
    this.messagesService.getMessages(this.headers).subscribe(res => {
      console.log(res);
      this.messages = Object.values(res);
      this.counter = this.messages.length;
      console.log(this.counter);
    }, err => console.log(err))
  }

}
