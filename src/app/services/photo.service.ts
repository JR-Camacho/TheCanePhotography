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
}
