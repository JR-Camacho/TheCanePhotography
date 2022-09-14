import { BreakpointObserver } from '@angular/cdk/layout';
import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-sesiones-exterior',
  templateUrl: './sesiones-exterior.component.html',
  styleUrls: ['./sesiones-exterior.component.css']
})
export class SesionesExteriorComponent implements OnInit {


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
    this.photoService.getFotosExterior().subscribe(res => {
      console.log(res);
      this.photos = Object.values(res);
    }, err => {
      console.log(err)
    })
  }
 
}
