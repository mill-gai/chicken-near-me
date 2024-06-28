import { Component, OnInit } from '@angular/core';
import { GoogleMap, MapAdvancedMarker } from '@angular/google-maps';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [GoogleMap, MapAdvancedMarker, FontAwesomeModule],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements OnInit {
  options: google.maps.MapOptions = {
    center: {lat: 40, lng: 10},
    zoom: 2,
    mapId: ""
  }
  position = {lat: 45.5, lng: -73.6};
  showContent = false;
  faCircleXmark = faCircleXmark;

  ngOnInit(): void {
  }

  onClickHandler()
  {
    console.log("yay");
    this.showContent = !this.showContent;
  }

}
