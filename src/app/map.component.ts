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

  ngOnInit(): void {
  }

  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      })
    ],
    zoom: 7,
    center: latLng([ 46.879966, -121.726909 ])
  };

}
