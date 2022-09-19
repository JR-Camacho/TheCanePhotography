import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  register(user:User, headers:any){
    return this.http.post('https://thecanephotography.herokuapp.com/api/register', user, {headers:headers});
  }

  login(user:User){
    return this.http.post('https://thecanephotography.herokuapp.com/api/login', user);
  }

  logout(headers:any){
    return this.http.get('https://thecanephotography.herokuapp.com/api/logout', {headers:headers});
  }

  deleteAcount(headers:any,id:number){
    return this.http.delete(`https://thecanephotography.herokuapp.com/api/delete-acount/${id}`, {headers:headers});
  }

}
