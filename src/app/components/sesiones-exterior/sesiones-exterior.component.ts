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
  needConfirmation:boolean = false;
  isLoading:boolean = false;
  error:string = '';
  confirmation:string = '';

  clearMessage(){
    this.confirmation = '';
    this.error = '';
  }

  setConfirmation(){
    this.needConfirmation? this.needConfirmation = false : this.needConfirmation = true;
  }

  getPhotos(){
    this.isLoading = true;
    this.photoService.getFotosExterior().subscribe(res => {
      this.photos = Object.values(res);
      this.isLoading = false;
    }, err => {
      this.isLoading = false;
    })
  }

  deletePhoto(id:number){
    this.isLoading = true;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    });
    this.photoService.deletePhoto(headers, id).subscribe(res => {
      this.getPhotos();
      this.isLoading = false;
      this.confirmation = 'Foto eliminada con exito.';
    }, err => {
      this.error = 'Error. La foto no se pudo eliminar';
      this.isLoading = false;
    });
  }
 
}
