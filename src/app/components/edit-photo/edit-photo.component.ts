import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-edit-photo',
  templateUrl: './edit-photo.component.html',
  styleUrls: ['./edit-photo.component.css']
})
export class EditPhotoComponent implements OnInit {
  constructor(private photoService:PhotoService, private activeRoute:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    sessionStorage.getItem('token') == null? this.router.navigate(['/ingresar']): this.id = this.activeRoute.snapshot.params['id'];
    this.headers = new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    });
    this.getPhoto();
  }

  photo:any;
  photoForUpdate: any;
  photoForPreview: any;
  id:any;
  headers:any;
  errors: any;
  isError: boolean;
  isLoading:boolean = false;

  open(){
     document.getElementById('photo')?.click();
     this.isError = false;
  }

  file(event: any) {
    this.photoForUpdate= event.target.files[0];
    console.log(this.photoForUpdate);
    this.getBase64(this.photoForUpdate);
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

  getPhoto(){
    this.photoService.showPhoto(this.headers, this.id).subscribe(res => {
      console.log(res);
      this.photo = res;
    }, err => console.log(err));
  }

  updatePhoto(){
    this.isLoading = true;
    const photo = new FormData();
    photo.append('id', this.id);
    photo.append('photo', this.photoForUpdate);
    photo.append('category', this.photo.category);

    this.photoService.updatePhoto(this.headers, photo).subscribe(res => {
      console.log(res);
      this.isLoading = false;
      this.photo.category == 'estudio' ? this.router.navigate(['/sesiones_estudio']) : this.router.navigate(['/sesiones_exterior']);
    }, err => {
      console.log(err)
      this.isLoading = false;
      this.errors = err.error.errors;
      this.isError = true;
    })
  }

}
