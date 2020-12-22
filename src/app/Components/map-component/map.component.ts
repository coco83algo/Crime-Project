import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'leaflet';

declare let L;

@Component({
  selector: 'cpa-map',
  template: `
    <cpa-navbar></cpa-navbar>
    <div id="forcesmap" style="height: 800px;"></div>
  `,

  styles: [],
})
export class MapComponent {
  constructor(private http: HttpClient) {}

  ngOnInit() {
    let myforcesmap;
    let geojson;

    // set the center
    myforcesmap = L.map('forcesmap').setView([51.5084, -0.1255], 7.5);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(
      myforcesmap
    );

    // Manage the informations which will be displayed
    let info;
    info = new L.Control();

    info.onAdd = function() {
      this._div = L.DomUtil.create('div', 'info');
      this.update();
      return this._div;
    };

    info.update = function(props) {
      this._div.innerHTML =
        '<h4>UK FORCE AREAS</h4>' +
        (props
          ? '<b>' +
            props.name +
            '</b><br />' +
            props.crimeRate +
            ' crimes in 2020'
          : 'Hover over an area');
    };

    info.addTo(myforcesmap);

    function resetHighlight(e) {
      geojson.resetStyle(e.target);
      info.update();
    }

    function zoomToFeature(e) {
      myforcesmap.fitBounds(e.target.getBounds());
    }

    function highlightFeature(e) {
      const layer = e.target;

      layer.setStyle({
        weight: 5,
        color: 'black',
        dashArray: '',
        fillOpacity: 0.7,
      });

      if (!L.Browser.ie && !L.Browser.edge) {
        layer.bringToFront();
      }

      info.update(layer.feature.properties);
    }

    this.http.get('assets/UKforces.geojson').subscribe((json: any) => {
      geojson = L.geoJSON(json, {
        style (feature) {
          if (feature.properties.crimeRate < 50000) {
            // < 50 000
            return {
              color: 'white',
              fillColor: '#FFEDA0',
              fillOpacity: 0.7,
              dashArray: '3',
              weight: 2,
            };
          }
          else if (
            feature.properties.crimeRate >= 50000 &&
            feature.properties.crimeRate < 100000
          ) {
            // 50 000 & 100 000
            return {
              color: 'white',
              fillColor: '#FEB24C',
              fillOpacity: 0.7,
              dashArray: '3',
              weight: 2,
            };
 }
          else if (
            feature.properties.crimeRate >= 100000 &&
            feature.properties.crimeRate < 150000
          ) {
            // 100 000 & 150 000
            return {
              color: 'white',
              fillColor: '#FD8D3C',
              fillOpacity: 0.7,
              dashArray: '3',
              weight: 2,
            };
 }
          else if (
            feature.properties.crimeRate >= 150000 &&
            feature.properties.crimeRate < 250000
          ) {
            // 150 000 & 250 000
            return {
              color: 'white',
              fillColor: '#FC4E2A',
              fillOpacity: 0.7,
              dashArray: '3',
              weight: 2,
            };
 }
          else if (
            feature.properties.crimeRate >= 250000 &&
            feature.properties.crimeRate < 500000
          ) {
            // 250 000 & 500 000
            return {
              color: 'white',
              fillColor: '#BD0026',
              fillOpacity: 0.7,
              dashArray: '3',
              weight: 2,
            };
 }
          else if (feature.properties.crimeRate >= 500000) {
            // > 500 000
            return {
              color: 'white',
              fillColor: '#800026',
              fillOpacity: 0.7,
              dashArray: '3',
              weight: 2,
            };
 }
          else {
            return {
              color: 'white',
              fillColor: 'white',
              fillOpacity: 0.7,
              dashArray: '3',
              weight: 2,
            };
 }
        },
        onEachFeature: function onEachFeature(feature, layer) {
          layer.on({
            mouseover: highlightFeature,
            mouseout: resetHighlight,
            click: zoomToFeature,
          });
        },
      }).addTo(myforcesmap);
    });

    this.http.get('assets/UKforces2.geojson').subscribe((json: any) => {
      geojson = L.geoJSON(json, {
        style(feature) {
          if (feature.properties.crimeRate < 50000) {
            // < 50 000
            return {
              color: 'white',
              fillColor: '#FFEDA0',
              fillOpacity: 0.7,
              dashArray: '3',
              weight: 2,
            };
          }
          else if (
            feature.properties.crimeRate >= 50000 &&
            feature.properties.crimeRate < 100000
          ) {
            // 50 000 & 100 000
            return {
              color: 'white',
              fillColor: '#FEB24C',
              fillOpacity: 0.7,
              dashArray: '3',
              weight: 2,
            };
 }
          else if (
            feature.properties.crimeRate >= 100000 &&
            feature.properties.crimeRate < 150000
          ) {
            // 100 000 & 150 000
            return {
              color: 'white',
              fillColor: '#FD8D3C',
              fillOpacity: 0.7,
              dashArray: '3',
              weight: 2,
            };
 }
          else if (
            feature.properties.crimeRate >= 150000 &&
            feature.properties.crimeRate < 250000
          ) {
            // 150 000 & 250 000
            return {
              color: 'white',
              fillColor: '#FC4E2A',
              fillOpacity: 0.7,
              dashArray: '3',
              weight: 2,
            };
 }
          else if (
            feature.properties.crimeRate >= 250000 &&
            feature.properties.crimeRate < 500000
          ) {
            // 250 000 & 500 000
            return {
              color: 'white',
              fillColor: '#BD0026',
              fillOpacity: 0.7,
              dashArray: '3',
              weight: 2,
            };
 }
          else if (feature.properties.crimeRate >= 500000) {
            // > 500 000
            return {
              color: 'white',
              fillColor: '#800026',
              fillOpacity: 0.7,
              dashArray: '3',
              weight: 2,
            };
 }
          else {
            return {
              color: 'white',
              fillColor: 'white',
              fillOpacity: 0.7,
              dashArray: '3',
              weight: 2,
            };
 }
        },
        onEachFeature: function onEachFeature(feature, layer) {
          layer.on({
            mouseover: highlightFeature,
            mouseout: resetHighlight,
            click: zoomToFeature,
          });
        },
      }).addTo(myforcesmap);
    });
  }
}
