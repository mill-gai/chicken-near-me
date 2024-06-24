import { Component, OnInit } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';
import { AnimationProp, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [GoogleMap, FontAwesomeModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit{
  openForm: boolean = false;
  faCircleXmark = faCircleXmark;
  animation:AnimationProp | undefined = undefined;

  options: google.maps.MapOptions = {
    center: {lat: 40, lng: 10},
    zoom: 2,
    mapId: ""
  }
  ngOnInit(): void {
  }

  addImageHandler() {
    this.openForm = !this.openForm;
    this.animation = undefined;
  }

  playIconAnimation() {
    this.animation = "beat-fade";
    this.openForm = !this.openForm;
  }
}
