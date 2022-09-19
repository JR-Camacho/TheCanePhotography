import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http:HttpClient) { }

  setNewPhoto(headers:any, photo:FormData){
    return this.http.post('https://thecanephotography.herokuapp.com/api/store-photo', photo, {headers:headers});
  }

  getFotosEstudio(){
    return this.http.get('https://thecanephotography.herokuapp.com/api/photos-estudio');
  }

  getFotosExterior(){
    return this.http.get('https://thecanephotography.herokuapp.com/api/photos-exterior');
  }

  showPhoto(headers:any, id:number){
    return this.http.get(`https://thecanephotography.herokuapp.com/api/show-photo/${id}`, {headers:headers});
  }

  updatePhoto(headers:any, photo:FormData){
    return this.http.post('https://thecanephotography.herokuapp.com/api/update-photo', photo, {headers:headers});
  }

  deletePhoto(headers:any, id:number){
    return this.http.delete(`https://thecanephotography.herokuapp.com/api/delete-photo/${id}`, {headers:headers});
  }
}
