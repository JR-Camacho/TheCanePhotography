import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http:HttpClient) { }

  setNewPhoto(headers:any, photo:FormData){
    return this.http.post('http://127.0.0.1:8000/api/store-photo', photo, {headers:headers});
  }

  getFotosEstudio(){
    return this.http.get('http://127.0.0.1:8000/api/photos-estudio');
  }

  getFotosExterior(){
    return this.http.get('http://127.0.0.1:8000/api/photos-exterior');
  }

  showPhoto(headers:any, id:number){
    return this.http.get(`http://127.0.0.1:8000/api/show-photo/${id}`, {headers:headers});
  }

  updatePhoto(headers:any, photo:FormData){
    return this.http.post('http://127.0.0.1:8000/api/update-photo', photo, {headers:headers});
  }

  deletePhoto(headers:any, id:number){
    return this.http.delete(`http://127.0.0.1:8000/api/delete-photo/${id}`, {headers:headers});
  }
}
