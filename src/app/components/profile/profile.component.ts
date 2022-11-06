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
  errors: any;
  isError: boolean;
  isLoading:boolean = false;
  error:string = '';
  confirmation:string = '';

  setConfirmation(){
    this.needConfirmation = true;
  }

  clearMessage(){
    this.confirmation = '';
    this.error = '';
  }

  getMyProfile(){
    this.isLoading = true;
    this.headers = new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    });
    this.userService.getUserProfile(this.headers).subscribe(res => {
      this.user = res;
      this.userForUpdate.id = this.user.id;
      this.userForUpdate.name = this.user.name;
      this.userForUpdate.password = this.password;
      this.isLoading = false;
    }, err => {
      this.isLoading = false;
    })
  }

  getAcounts(){
    this.isLoading = true;
    this.userService.getUsers(this.headers).subscribe(res => {
      this.acounts = Object.values(res);
      this.isLoading = false;
    }, err => {
      this.isLoading = false;
    })
  }

  updateMyProfile(){
    this.clearMessage();
    this.isLoading = true;
    this.userService.updateUserProfile(this.headers, this.userForUpdate).subscribe(res => {
      this.getMyProfile();
      this.confirmation = 'Actualizacion de perfil exitosa.'
    }, err => {
      this.errors = err.error.errors;
      this.isError = true;
      this.isLoading = false;
      this.error = 'Actualizacion de perfil fallida.'
    });
  }

  deleteAcount(){
    this.clearMessage();
    this.isLoading = true;
    this.authService.deleteAcount(this.headers, this.user.id).subscribe(res => {
      this.isLoading = false;
      sessionStorage.removeItem('token');
      this.router.navigate(['/'])
    }, err => {
      this.needConfirmation = false;
      this.error = 'Fallo al eliminar la cuenta!'
      this.isLoading = false;
    });
  }

  getMessages(){
    this.isLoading = true;
    this.messagesService.getMessages(this.headers).subscribe(res => {
      console.log(res);
      this.messages = Object.values(res);
      this.counter = this.messages.length;
      this.isLoading = false;
    }, err => {
      console.log(err)
      this.isLoading = false;
    })
  }

}
