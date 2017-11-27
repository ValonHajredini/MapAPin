import { Injectable } from '@angular/core';
import { InitMarkersService } from './init-markers.service';

@Injectable()
export class MarkerService extends  InitMarkersService {
      markerSettings: any = {
          zoom: 10,
          camLat: 40.5875,
          camLng: -70.334435
      }
  constructor() {
    super();
      console.log('MarkerService Initialized...');
      this.load();
  }
  getMapSettings() {
    var latetude = 0;
    var longetude = 0;
    var arrayLangth = 0;

    var markers = JSON.parse(localStorage.getItem('markers'));
    for (var i = 0; i < markers.length;  i++) {
      latetude = latetude + markers[i].lat;
      longetude = longetude + markers[i].lng;
    }
    arrayLangth = markers.length;
    this.markerSettings.camLat =  latetude / arrayLangth;
    this.markerSettings.camLng =  longetude / arrayLangth;
    return this.markerSettings;
  }
  getMarkers() {
    var markers = JSON.parse(localStorage.getItem('markers'));
    return markers;
  }
  addMarker(newMarkers) {
    var markers = JSON.parse(localStorage.getItem('markers'));
    markers.push(newMarkers);
    localStorage.setItem('markers', JSON.stringify(markers));
  }

  updateMarker(newLat, newLng, i) {
    var markers = JSON.parse(localStorage.getItem('markers'));
        markers[i].lat = newLat;
        markers[i].lng = newLng;

    localStorage.setItem('markers', JSON.stringify(markers));
  }
  deleteMarker(index) {
    var markers = JSON.parse(localStorage.getItem('markers'));
    markers.splice(index, 1);
    localStorage.setItem('markers', JSON.stringify(markers));
  }

}
