import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/models/message';
import { MessagesService } from 'src/app/services/messages.service';


@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent implements OnInit {

  constructor(private messagesService:MessagesService ,private breakPointObserver: BreakpointObserver) { }

  phone: boolean = false;
  message:Message = new Message();

  ngOnInit(): void {
    this.breakPointObserver.observe('(max-width: 600px)').subscribe(
      res => this.phone = res.matches
    )
  }

  newMessage(){
    this.messagesService.setNewMessage(this.message).subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err);
    })
  }
}
