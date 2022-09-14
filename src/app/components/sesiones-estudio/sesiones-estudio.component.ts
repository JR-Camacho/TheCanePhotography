import { BreakpointObserver } from '@angular/cdk/layout';
import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-sesiones-estudio',
  templateUrl: './sesiones-estudio.component.html',
  styleUrls: ['./sesiones-estudio.component.css']
})
export class SesionesEstudioComponent implements OnInit {

  constructor(private breakPointObserver: BreakpointObserver, private photoService:PhotoService) { }

  ngOnInit(): void {
    this.breakPointObserver.observe('(max-width: 600px)').subscribe(
      res => this.phone = res.matches
    )
    if(sessionStorage.getItem('token') != null) this.isLogged = true;
    this.getPhotos();
  }

  phone: boolean = false;
  isLogged:boolean = false;
  photos:any[];

  getPhotos(){
    this.photoService.getFotosEstudio().subscribe(res => {
      console.log(res);
      this.photos = Object.values(res);
    }, err => {
      console.log(err)
    })
  }



 

}
