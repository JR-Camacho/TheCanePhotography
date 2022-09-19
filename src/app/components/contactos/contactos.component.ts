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
  errors: any;
  isError: boolean;
  isLoading:boolean = false;
  msg:string;
  message:Message = new Message();

  ngOnInit(): void {
    this.breakPointObserver.observe('(max-width: 600px)').subscribe(
      res => this.phone = res.matches
    )
  }

  newMessage(){
    this.isLoading = true;
    this.messagesService.setNewMessage(this.message).subscribe(res => {
      console.log(res);
      this.isLoading = false;
      this.msg = 'Formulario enviado con exito.';
    }, err => {
      console.log(err);
      this.isLoading = false;
      this.errors = err.error.errors;
      this.isError = true;
      this.msg = 'El formulario no pudo ser enviado.';
    })
  }
}
