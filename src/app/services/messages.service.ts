import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private http:HttpClient) { }

  getMessages(headers:any){
    return this.http.get(`http://127.0.0.1:8000/api/messages`, {headers:headers});
  }

  showMessage(headers:any, id:number){
    return this.http.get(`http://127.0.0.1:8000/api/show-message/${id}`, {headers:headers});
  }
  
  setNewMessage(message:Message){
    return this.http.post(`http://127.0.0.1:8000/api/store-message`, message);
  }

  deleteMessage(headers:any, id:number){
    return this.http.delete(`http://127.0.0.1:8000/api/delete-message/${id}`, {headers:headers});
  }
}
