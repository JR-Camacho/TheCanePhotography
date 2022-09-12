import { BreakpointObserver } from '@angular/cdk/layout';
import { HttpHeaders } from '@angular/common/http';
import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {

  constructor(private breakPointObserver: BreakpointObserver, private authService:AuthService, private router:Router){}
  title = 'TheCaneGroup';
  
  canUse:boolean = false;
  width:any;
  seeM:boolean = false;
  phone:boolean = false;
  mostrar:boolean = false;
  loggedIn:boolean = false;

  isLogged(){
    sessionStorage.getItem('token') == null? this.loggedIn = false : this.loggedIn = true; 
  }

  seeMenu(){
    if(this.seeM == false){
      this.seeM = true;
    } else{
      this.seeM = false;
    }
  }

  logout(){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    });
    this.authService.logout(headers).subscribe(res => {
      console.log(res)
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('password');
      this.router.navigate(['/']);
    }, 
    err => {
      console.log(err)
    })
  }
  
  ngOnInit(): void {
    this.isLogged();
    if(this.breakPointObserver.isMatched('(max-width: 674px)')){
      console.info('Es mayor a 674px');
    }
   this.breakPointObserver.observe('(max-width: 674px)').subscribe(
      res => {
        console.log(res.matches)
        this.width = res.matches;
      }
    )

    this.breakPointObserver.observe('(max-width: 600px)').subscribe(
      res => this.phone = res.matches
    )
  }

  ngDoCheck(): void {
    this.isLogged();
  }
  
}
