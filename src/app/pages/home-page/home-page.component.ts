import { Component, OnInit } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';
import { AnimationProp, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { ImageUploaderComponent } from '../../components/image-uploader/image-uploader.component'
import { FormBuilder ,FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [GoogleMap, FontAwesomeModule, ImageUploaderComponent, ReactiveFormsModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit{
  openForm: boolean = false;
  addImageForm: FormGroup;
  faCircleXmark = faCircleXmark;
  animation:AnimationProp | undefined = undefined;

  options: google.maps.MapOptions = {
    center: {lat: 40, lng: 10},
    zoom: 2,
    mapId: ""
  }
  ngOnInit(): void {
  }

  constructor(private fb: FormBuilder){
    this.addImageForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      image: [undefined, [Validators.required]]
    })
  }

  addImageHandler() {
    this.openForm = !this.openForm;
    this.animation = undefined;
  }

  playIconAnimation() {
    this.animation = "beat-fade";
    this.openForm = !this.openForm;
  }
  onSubmit(): void {
    console.log("name: " + this.addImageForm.get('name')?.value);
    console.log("description: " + this.addImageForm.get('description')?.value);
    console.log("image: " + this.addImageForm.get('image')?.value);
  }
}
