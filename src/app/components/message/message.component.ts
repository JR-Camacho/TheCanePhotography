import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor(private messagesService:MessagesService, private router:Router, private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    sessionStorage.getItem('token') == null? this.router.navigate(['/ingresar']) : this.id = this.activeRoute.snapshot.params['id'];
    this.getMessage();
  }

  id:number;
  message:any;

  getMessage(){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    });
    this.messagesService.showMessage(headers, this.id).subscribe(res => {
      console.log(res);
      this.message = res;
    }, err => console.log(err));
  }

}
