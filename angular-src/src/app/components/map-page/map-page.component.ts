import { Component, NgModule } from '@angular/core';
import { ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';


import { BrowserModule } from '@angular/platform-browser';
import { FormControl } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";

declare var google: any;

@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.css'],
})
export class MapPageComponent implements OnInit{

  title: string = 'My first AGM project';
  lat: number =  6.5244;
  long: number = 3.3792;
  /*searchControl: FormControl;
  */
  zoom: number = 13;

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}` )
  }


  mapClicked($event:any) {
      console.log('YOU CAN CLICK');
      var newMarker = {
        lat: $event.coords.lat,
        long: $event.coords.long,
        draggable: false
      }
      this.markers.push(newMarker); 
  }


markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }

  markers: marker[] = [
	  {
		  lat:6.4338,
		  long: 3.4220,
		  draggable: true
	  },
	  {
		  lat: 6.4561,
		  long: 3.4306,
		  draggable: false
	  }
  ]
/*
@ViewChild("search")
  public searchElementRef: ElementRef;
  */
  constructor(

  ) {}

  ngOnInit() {
    
    //set google maps defaults
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

interface marker {
	lat: number;
	long: number;
	draggable:boolean;
}

