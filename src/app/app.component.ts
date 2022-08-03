import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private breakPointObserver: BreakpointObserver){}
  title = 'TheCaneGroup';
  
  canUse:boolean = false;
  width:any;
  seeM:boolean = false;
  phone:boolean = false;

  seeMenu(){
    if(this.seeM == false){
      this.seeM = true;
    } else{
      this.seeM = false;
    }
  }
  
  ngOnInit(): void {
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
  
}
