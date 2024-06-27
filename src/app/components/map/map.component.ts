import { Component, OnInit } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [GoogleMap],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements OnInit {
  options: google.maps.MapOptions = {
    center: {lat: 40, lng: 10},
    zoom: 2,
    mapId: ""
  }

  ngOnInit(): void {
  }

}
