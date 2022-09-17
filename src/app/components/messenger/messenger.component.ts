import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-messenger',
  templateUrl: './messenger.component.html',
  styleUrls: ['./messenger.component.css']
})
export class MessengerComponent implements OnInit {

  constructor(private messagesService:MessagesService, private router:Router) { }

  ngOnInit(): void {
    sessionStorage.getItem('token') == null? this.router.navigate(['/ingresar']) : this.headers = new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    });
    this.getMessages();
  }

  headers:any;
  needConfirmation:boolean = false;
  messages:any[];
  counter:any;
  id_articulo:number;

  setConfirmation(id_articulo:number){
     this.needConfirmation = true;
     this.id_articulo = id_articulo;
  }

  getMessages(){
    this.messagesService.getMessages(this.headers).subscribe(res => {
      console.log(res);
      this.messages = Object.values(res);
      this.counter = this.messages.length;
    }, err => console.log(err))
  }

  deleteMessage(){
    this.messagesService.deleteMessage(this.headers, this.id_articulo).subscribe(res => {
      console.log(res)
      this.needConfirmation = false;
      this.getMessages();
    },err => console.log(err))
  }
}
