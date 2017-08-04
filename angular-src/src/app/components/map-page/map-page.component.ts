import { Component, NgModule, NgZone} from '@angular/core';
import {MarkerService} from "../../services/marker.service";
import {AgmCoreModule, MapsAPILoader} from '@agm/core';
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";


declare var google: any;

@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.css'],
})
export class MapPageComponent {

  lat: number =  6.5244;
  lng: number = 3.3792;
  zoom: number = 13;

    //Values
  markerName: string;
  markerLat: string;
  markerLng: string;
  markerDraggable: string;
  markers: marker[] = [];
   
  /*searchControl: FormControl;
  */

/*Gets pre-defined markers from MarkerServices and adds them to the map */
  constructor(private markerService: MarkerService) {
     this.markers = this.markerService.getMarkers();
  }

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

    this.markerService.updateMarker(updMarker, newLat, newLng)
  }

  /*Allows user add new marker to the map */
  addMarker(){
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

  }

  ngOnInit() {
  
    /*
    var map = new google.maps.Map(document.getElementById('map'), {
          center: new google.maps.LatLng(6.5244, 3.3792),
          zoom: 13
        });
    this.zoom = 13;
    this.lat = 6.5244;
    this.long = 3.3792;

    //create search FormControl
    this.searchControl = new FormControl();

    //marker
    var marker = new google.maps.Marker();

    //set current position
    //this.setCurrentPosition();

    //load Places Autocomplete
    /*
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      let marker =  new google.maps.Marker({ 
        draggable: true,
        animation: google.maps.Animation.DROP,
        position: map.center,
        map: map,
        title:"Your Location"
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          var input = document.getElementById('pac-input');
          var autocomplete = new google.maps.places.Autocomplete(input);

          // Bind the map's bounds (viewport) property to the autocomplete object,
          // so that the autocomplete requests use the current map bounds for the
          // bounds option in the request.
          autocomplete.bindTo('bounds', map);
          var place =  google.maps.places.PlaceResult = autocomplete.getPlace();

          
          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 15;
        });
      });
    });
    */
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


