import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getUserProfile(headers:any){
    return this.http.get('https://thecanephotography.herokuapp.com/api/user-profile', {headers:headers});
  }

  getUsers(headers:any){
    return this.http.get('https://thecanephotography.herokuapp.com/api/users', {headers:headers});
  }

  updateUserProfile(headers:any, user:User){
    return this.http.put('https://thecanephotography.herokuapp.com/api/update-profile', user, {headers:headers});
  }
}
