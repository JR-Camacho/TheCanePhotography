import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OffersService {

  constructor(private http:HttpClient) { }

  getOffers(){
    return this.http.get('http://127.0.0.1:8000/api/offers');
  }

  getOffer(id:number, headers:any){
    return this.http.get(`http://127.0.0.1:8000/api/offers/${id}`, {headers: headers});
  }

  newOffer(offer:FormData, headers:any){
    return this.http.post(`http://127.0.0.1:8000/api/offers`, offer, {headers: headers});
  }

  updateOffer(offer:FormData, headers:any){
    return this.http.put(`http://127.0.0.1:8000/api/offers`, offer, {headers: headers});
  }

  deleteOffer(id:number, headers:any){
    return this.http.delete(`http://127.0.0.1:8000/api/offers/${id}`, {headers: headers});
  }
}