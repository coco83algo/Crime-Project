import { Component, OnInit } from '@angular/core';
import { latLng, tileLayer } from 'leaflet';

@Component({
  selector: 'cpa-map',
  template: `
    <div class="map"
     leaflet
     [leafletOptions]="options">
    </div>
  `,
  styles: [`.map {height: 100%; padding: 0;}
  html, body {height: 100%; margin: 0; padding: 0;}
`]
})
export class MapComponent implements OnInit {

  constructor() { }

  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors', //
        maxZoom: 16, // Zoom max que l'utilisateur peut faire
        minZoom: 6 // Zoom min que l'utilisateur peut faire
      })
    ],
    zoom: 10,
    center: latLng([ 51.5084, -0.1255 ])
  };
  // onMapReady(map) {

  // }

  ngOnInit(): void {
  }

}
