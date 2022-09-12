import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getUserProfile(headers:any){
    return this.http.get('http://127.0.0.1:8000/api/user-profile', {headers:headers});
  }

  updateUserProfile(headers:any, user:User){
    return this.http.put('http://127.0.0.1:8000/api/update-profile', user, {headers:headers});
  }

}
