import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barra-redes-phone',
  templateUrl: './barra-redes-phone.component.html',
  styleUrls: ['./barra-redes-phone.component.css']
})
export class BarraRedesPhoneComponent implements OnInit {
  ver:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  verRedes(){    
    if(this.ver == false){
      this.ver = true;
    }else{
      this.ver = false;
    }
  }

}
