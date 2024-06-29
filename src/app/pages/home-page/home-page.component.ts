import { Component, OnInit, ViewChild } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { ImageUploaderComponent } from '../../components/image-uploader/image-uploader.component'
import { FormBuilder ,FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DropdownMenuComponent } from '../../components/dropdown-menu/dropdown-menu.component';
import { locations } from '../../constants/locations';
import { HeaderComponent } from '../../components/header/header.component';
import { S3Service } from '../../services/s3/s3.service'
import { NgIf } from '@angular/common';
import { NotificationComponent } from '../../components/notification/notification.component';
import { MapComponent } from '../../components/map/map.component';
import { GoogleMap } from '@angular/google-maps';
import { ImageService } from '../../services/image/image.service';
import { ImageInfo } from '../../model/image'

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [FontAwesomeModule, 
            ImageUploaderComponent, 
            ReactiveFormsModule, 
            DropdownMenuComponent,
            HeaderComponent,
            NgIf,
            NotificationComponent,
            MapComponent,
            GoogleMap
          ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit{
  openForm: boolean = false;
  isSubmitForm: boolean = false;
  message: string;
  addImageForm: FormGroup;
  faCircleXmark = faCircleXmark;
  faImage = faImage;
  fileObj:File;
  imageUrl: string | ArrayBuffer | null = null;
  locations = locations;
  imageUrl1: string | null = null;
  @ViewChild(NotificationComponent)
  notiComponent: NotificationComponent;

  options: google.maps.MapOptions = {
    center: {lat: 40, lng: 10},
    zoom: 2,
    mapId: ""
  }
  ngOnInit(): void {
  }

  constructor(private fb: FormBuilder, private s3Service: S3Service, private imageService: ImageService){
    this.addImageForm = this.fb.group({
      name: ['', [Validators.required]],
      description: [''],
      location: ['', [Validators.required]],
      image: [undefined, [Validators.required]]
    })
  }

  handleImageError(): void {
    this.s3Service.getSignedUrl('grass.png').then((data)=>{
      this.imageUrl1 = data;
      console.log("image url: " + this.imageUrl1);
    });
  }

  addImageHandler() {
    this.openForm = !this.openForm;
    this.isSubmitForm = false;
    this.addImageForm.reset();
  }

  // private getFileUrl(file: File):

  onUploadImage(event: Event):void {
    const input = event.target as HTMLInputElement;
    if(input.files) {
      console.log(input.files);
      var fileReader= new FileReader();
      this.fileObj = input.files[0];
      console.log(this.fileObj);
      fileReader.readAsDataURL(this.fileObj);
      fileReader.onload = () => {
        this.imageUrl = fileReader.result;
      }
    }
  }

  onSubmit(): void {
    this.isSubmitForm = true;
    console.log("name: " + this.addImageForm.get('name')?.value);
    console.log("description: " + this.addImageForm.get('description')?.value);
    console.log("image: " + this.addImageForm.get('image')?.value);
    console.log("location: " + this.addImageForm.get('location')?.value);
    console.log( "name valid: " + this.addImageForm.get('name').valid);
    const image: ImageInfo = {
      title : this.addImageForm.get('name')?.value,
      description : this.addImageForm.get('description')?.value,
      country: "test city3",
      city: "test city3"
    }
    
    if(this.addImageForm.valid) {
      console.log("form is valid");
      this.imageService.uploadImage(image, this.fileObj);
      this.notiComponent.playAnimation("valid input");
    } else {
      console.log("form is not valid");
      this.message = "invalid input";
      this.notiComponent.playAnimation("invalid input");
    }
    // const fileForm = new FormData();
    // fileForm.append('file', this.fileObj);
    // this.s3Service.uploadImage(this.fileObj);

    // fileReader.readAsDataURL()
  }

  onSelectLocation(selectedLocation: string): void {
    console.log("selected: " + selectedLocation);
    this.addImageForm.patchValue({location: selectedLocation});
  }

  get name() { return this.addImageForm.get('name'); }
  get description() { return this.addImageForm.get('description'); }
  get location() { return this.addImageForm.get('location') };

}
