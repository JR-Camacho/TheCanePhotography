import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private http:HttpClient) { }

  getMessages(headers:any){
    return this.http.get(`https://thecanephotography.herokuapp.com/api/messages`, {headers:headers});
  }

  showMessage(headers:any, id:number){
    return this.http.get(`https://thecanephotography.herokuapp.com/api/show-message/${id}`, {headers:headers});
  }
  
  setNewMessage(message:Message){
    return this.http.post(`https://thecanephotography.herokuapp.com/api/store-message`, message);
  }

  deleteMessage(headers:any, id:number){
    return this.http.delete(`https://thecanephotography.herokuapp.com/api/delete-message/${id}`, {headers:headers});
  }
}
