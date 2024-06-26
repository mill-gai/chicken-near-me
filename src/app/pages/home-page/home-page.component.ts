import { Component, OnInit } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';
import { AnimationProp, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { ImageUploaderComponent } from '../../components/image-uploader/image-uploader.component'
import { FormBuilder ,FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DropdownMenuComponent } from '../../components/dropdown-menu/dropdown-menu.component';
import { locations } from '../../constants/locations';
import { HeaderComponent } from '../../components/header/header.component';
import { S3Service } from '../../services/s3/s3.service'

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [GoogleMap, 
            FontAwesomeModule, 
            ImageUploaderComponent, 
            ReactiveFormsModule, 
            DropdownMenuComponent,
            HeaderComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit{
  openForm: boolean = false;
  addImageForm: FormGroup;
  faCircleXmark = faCircleXmark;
  faImage = faImage;
  fileObj:File;
  imageUrl: string | ArrayBuffer | null = null;
  locations = locations;

  options: google.maps.MapOptions = {
    center: {lat: 40, lng: 10},
    zoom: 2,
    mapId: ""
  }
  ngOnInit(): void {
  }

  constructor(private fb: FormBuilder, private s3Service: S3Service){
    this.addImageForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      location: ['', [Validators.required]],
      image: [undefined, [Validators.required]]
    })
  }

  addImageHandler() {
    this.openForm = !this.openForm;
    console.log("yay");
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
    console.log("name: " + this.addImageForm.get('name')?.value);
    console.log("description: " + this.addImageForm.get('description')?.value);
    console.log("image: " + this.addImageForm.get('image')?.value);
    console.log("location: " + this.addImageForm.get('location')?.value);
    const fileForm = new FormData();
    fileForm.append('file', this.fileObj);
    this.s3Service.uploadImage(this.fileObj);

    // fileReader.readAsDataURL()
  }

  onSelectLocation(selectedLocation: string): void {
    console.log("selected: " + selectedLocation);
    this.addImageForm.patchValue({location: selectedLocation});
  }
}
