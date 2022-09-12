import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  register(user:User, headers:any){
    return this.http.post('http://127.0.0.1:8000/api/register', user, {headers:headers});
  }

  login(user:User){
    return this.http.post('http://127.0.0.1:8000/api/login', user);
  }

  logout(headers:any){
    return this.http.get('http://127.0.0.1:8000/api/logout', {headers:headers});
  }

}
