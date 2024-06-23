import { Component, OnInit } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [GoogleMap],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit{
  center: google.maps.LatLngLiteral = {lat: 2, lng: 2};
  zoom = 10;
  mapId = "";
  ngOnInit(): void {
  }
}
