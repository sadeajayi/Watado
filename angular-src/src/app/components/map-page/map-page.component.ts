import { Component, NgModule, NgZone, OnInit, ViewChild, ElementRef } from '@angular/core';
import {MarkerService} from "../../services/marker.service";

import { AgmCoreModule, MapsAPILoader } from '@agm/core';
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MapCluster } from '../../map-cluster';
import { AgmJsMarkerClustererModule, ClusterManager } from "@agm/js-marker-clusterer";

import 'js-marker-clusterer/src/markerclusterer.js';

import {Http, HttpModule} from '@angular/http';

//Importing socket-io services for real-time interactions
import { SocketService } from '../shared/socket.service';

declare var google: any;
declare const MarkerClusterer;

@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.css'],

})

export class MapPageComponent implements OnInit {
 // socket: SocketIOClient.Socket

  lat: number =  6.4471;
  lng: number = 3.4182;
  zoom: number = 14;
  searchControl: FormControl;

    //Values
  markerName: string;
  markerLat: string;
  markerLng: string;
  markerDraggable: string;
  markers: marker[] = [];


 @ViewChild("search")
  public searchElementRef: ElementRef;

/*Gets pre-defined markers from MarkerServices and adds them to the map */
  constructor(
    private markerService: MarkerService, 
    private _socketService: SocketService,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
  ) {
    document.body.style.backgroundColor = "#FFFFFF";
     this.markers = this.markerService.getMarkers();
     //this.socket = io.connect();
  }

  /* Testing to respond to user clicking marker on client */
  clickedMarker(marker: marker, index: number) {
    console.log(`clicked the marker:` + marker.name + index);
  }

/*Should render new marker onclick on map */

  mapClicked($event:any) {
      var newMarker = {
        name: 'Untitled',
        lat: $event.coords.lat,
        lng: $event.coords.lng,
        draggable: false
      }
      this.markers.push(newMarker); 
      this._socketService.emit('add-marker', newMarker);
  }

  markerDragEnd(marker: any, $event:any){
    console.log('dragEnd',marker,$event)
    var updMarker = {
      name: marker.name,
      lat: parseFloat(marker.lat),
      lng: parseFloat(marker.lng),
      draggable: false
    }

    var newLat = $event.coords.lat;
    var newLng = $event.coords.lng;

    this.markerService.updateMarker(updMarker, newLat, newLng);
  }

  //Allows user add new marker to the map 
  addMarker($event){
    if(this.markerDraggable == 'yes'){
      var isDraggable = true;
    }else{
      var isDraggable = false;
    }

    var newMarker = {
      name: this.markerName,
      lat: parseFloat(this.markerLat),
      lng: parseFloat(this.markerLng),
      draggable: isDraggable
    }

    this.markers.push(newMarker);
    this.markerService.addMarker(newMarker);
    this._socketService.emit('add-marker', newMarker);
  }
 
  ngOnInit() {
     
    this._socketService.on('marker-added', (marker:any) => {
        this.markers.push(marker);
         
      });
    
          
    this.zoom = 14;
    this.lat = 6.4471;
    this.lng =  3.4182;

    //create search FormControl
    this.searchControl = new FormControl();
    /*
    //set current position
    //this.setCurrentPosition();
      */

    //load Google Places Autocomplete
    
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
          bounds: {
          east:  3.696728,
          north: 6.702798,
          south: 6.393351,
          west: 3.098273
      },
        types: ["establishment"]
      });

      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          //var input = document.getElementById('pac-input');
          //var autocomplete = new google.maps.places.Autocomplete(input);

          // Bind the map's bounds (viewport) property to the autocomplete object,
          // so that the autocomplete requests use the current map bounds for the
          // bounds option in the request.
          //autocomplete.bindTo('bounds', map);
          var place =  google.maps.places.PlaceResult = autocomplete.getPlace();
          //var boundsByViewport = place.geometry.viewport;
          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.lat = place.geometry.location.lat();
          this.lng = place.geometry.location.lng();
          this.zoom = 18;
        });
      });
    });
    
  }

  /*
  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 15;
         
      });
    }
  }
  */
}

//Marker Type
interface marker {
  name?: string;
  lat: number
  lng: number;
  draggable: boolean;
}


