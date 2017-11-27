import { Component } from '@angular/core';
import { MarkerInterface } from './interfaces/marker';

import { MarkerService } from './services/marker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MarkerService]
})
export class AppComponent {
  mappSettings: any;
   // Zoom Level
  zoom: number = 10;
  // Start Postions
  lat: number = 42.858217;
  lng: number = -70.929990;

  // Markers
  markers: MarkerInterface[];
  markerName: string;
  markerLat: string;
  margerLng: string;
  markerDragable: string;

  constructor (private _markerService: MarkerService ) {
    this.markers = this._markerService.getMarkers();
    this.mappSettings = this._markerService.getMapSettings();
    console.log(this.mappSettings);
  }

  clickedMarker(mark: MarkerInterface, i: number) {
    console.log('Clicked index: ' + i + ' marker: ', mark);
  }
  mapClicked(e: any) {
    let newMarker: any = {
      name: 'untiteld',
      lat: e.coords.lat,
      lng: e.coords.lng,
      dragable: true
    };
    this.markers.push(newMarker);
    console.log('Created Marker: ', newMarker);
  }
  markerDragEnd(mark: any, e: any, index: number) {
    console.log('Draged Marker to the end point', );
    let updatedMarker: any = {
      name: mark.name,
      lat:  parseFloat(mark.lat),
      lng:  parseFloat(mark.lat),
      dragable: mark.dragable
    };
    console.log(e );
    let newLat = e.coords.lat;
    let newLng = e.coords.lng;

    this._markerService.updateMarker( newLat, newLng , index);
  }
  addMarker() {
    console.log("Adding Marker");
    if (this.markerDragable === 'yes') {
      var isDragable: boolean = true;
      console.log('yes');
    }else {
      var isDragable: boolean = false;
      console.log('no');
    }
    var newMarker = {
      name: this.markerName,
      lat: parseFloat(this.markerLat),
      lng: parseFloat(this.margerLng),
      dragable: isDragable
    };
    this.markers.push(newMarker);
    console.log(newMarker, this.markers);
    this._markerService.addMarker(newMarker);
  }
  removeMarker(index) {
    this._markerService.deleteMarker(index);
    this.markers = this._markerService.getMarkers();
    this.mappSettings = this._markerService.getMapSettings();

  }
}

