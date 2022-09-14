import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-new-photo',
  templateUrl: './new-photo.component.html',
  styleUrls: ['./new-photo.component.css']
})
export class NewPhotoComponent implements OnInit {

  constructor(private photoService:PhotoService, private activeRoute:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    console.log(this.category);
    sessionStorage.getItem('token') == null? this.router.navigate(['/ingresar']): this.category = this.activeRoute.snapshot.params['category'];;
  }

  photoForUpload: any;
  photoForPreview: any;
  category:string;

  open(){
     document.getElementById('photo')?.click();
  }

  file(event: any) {
    this.photoForUpload = event.target.files[0];
    console.log(this.photoForUpload);
    this.getBase64(this.photoForUpload);
  }

  getBase64(image:any){
    try {
      let imagen = image;
      console.log(imagen);
      let reader = new FileReader();
      reader.readAsDataURL(imagen);
      reader.onloadend = () => {
        console.log(reader.result);
        this.photoForPreview = reader.result;
      } 
    } catch (error) {
      console.log(error);
    }
  }

  newPhoto(){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    });
    const photo = new FormData();
    photo.append('photo', this.photoForUpload);
    photo.append('category', this.category)

    this.photoService.setNewPhoto(headers, photo).subscribe(res => {
      console.log(res);
      this.category == 'estudio' ? this.router.navigate(['/sesiones_estudio']) : this.router.navigate(['/sesiones_exterior']);
    }, err => {
      console.log(err)
    })
  }

}
