import { HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { OffersService } from 'src/app/services/offers.service';

@Component({
  selector: 'app-update-offer',
  templateUrl: './update-offer.component.html',
  styleUrls: ['./update-offer.component.css']
})
export class UpdateOfferComponent implements OnInit {
  
  constructor(private offerService:OffersService) { }
  
  @Input() id:number;
  headers: any;
  offer:any;
  offerForUpdate:any;
  // offerForUpload: any;
  offerForPreview: any;

  getOffer(){
    this.headers = new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    });
    console.log(this.headers);
    this.offerService.getOffer(this.id, this.headers).subscribe(res => {
      console.log(res);
      this.offer = res;
    }, err => console.log(err));
  }

  open(){
    document.getElementById('offer')?.click();
 }

 file(event: any) {
   this.offerForUpdate = event.target.files[0];
   this.getBase64(this.offerForUpdate);
 }

 getBase64(image:any){
   try {
    //  let imagen = image;
    //  console.log(imagen);
     let reader = new FileReader();
     reader.readAsDataURL(image);
     reader.onloadend = () => {
       console.log(reader.result);
       this.offerForPreview = reader.result;
     } 
   } catch (error) {
     console.log(error);
   }
 }

  updateOffer(){
    // this.clearMessage();
    // this.isLoading = true;
    const offer = new FormData();
    offer.append('id', this.offer.id);
    offer.append('photo_url', this.offerForUpdate);

    this.offerService.updateOffer(offer, this.headers).subscribe(res => {
      console.log(res);
      // this.isLoading = false;
    }, err => {
      console.log(err)
      // this.isLoading = false;
      // this.errors = err.error.errors;
      // this.error = 'Se ha producido un error, por favor verifica que todo este bien.';
      // this.isError = true;
      console.log(err);
    })
  }

  newOffer(){
    // this.clearMessage();
    // this.isLoading = true;
    const offer = new FormData();
    offer.append('photo_url', this.offerForUpdate);

    console.log(this.headers);

    this.offerService.newOffer(offer, this.headers).subscribe(res => {
      console.log(res);
      // this.isLoading = false;
    }, err => {
      console.log(err)
      // this.isLoading = false;
      // this.errors = err.error.errors;
      // this.error = 'Se ha producido un error, por favor verifica que todo este bien.';
      // this.isError = true;
    })
  }

  ngOnInit(): void {
    this.getOffer();
  }

}
