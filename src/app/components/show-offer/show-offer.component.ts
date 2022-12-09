import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { OffersService } from 'src/app/services/offers.service';

@Component({
  selector: 'app-show-offer',
  templateUrl: './show-offer.component.html',
  styleUrls: ['./show-offer.component.css']
})
export class ShowOfferComponent implements OnInit {

  offers:any;
  headers: any;

  getOffers(){
    this.offerService.getOffers().subscribe(res => {
      console.log(res);
      this.offers = res;
    }, err => console.log(err));
  }

  deleteOffer(id:number){
    this.offerService.deleteOffer(id, this.headers).subscribe(res => console.log(res), err => console.log(err));
  }

  constructor(private offerService:OffersService) { }

  ngOnInit(): void {
    this.headers = new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    });
    this.getOffers();
  }

}
