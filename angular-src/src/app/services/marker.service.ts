import { Injectable } from '@angular/core';
import {Init} from "../init-markers";

@Injectable()
export class MarkerService extends Init{

  constructor() {
    super();
    console.log("Marker Service Initialized ")
    this.load();
  }

  getMarkers(){
    var markers = JSON.parse(localStorage.getItem('markers'));
    return markers;
  }

  addMarker(newMarker){
    //fetch markers that are already there
    var markers = JSON.parse(localStorage.getItem('markers'));

    // Push to array
    markers.push(newMarker);

    //set markers again
    localStorage.setItem('markers',JSON.stringify(markers))
  }



  updateMarker(marker, newLat, newLng){
    var markers = JSON.parse(localStorage.getItem('markers'));

    for(let i = 0; i < markers.length; i++){
      if(marker.lat == markers[i].lat && marker.lng == markers[i].lng){
        markers[i].lat = newLat;
        markers[i].lng = newLng;
      }
    }
    //set markers again
    localStorage.setItem('markers',JSON.stringify(markers))

  }

  removeMarker(marker){
    var markers = JSON.parse(localStorage.getItem('markers'));

    for(let i = 0; i < markers.length; i++){
      if(marker.lat == markers[i].lat && marker.lng == markers[i].lng){
        markers.splice(i, 1)
      }
    }
    //set markers again
    localStorage.setItem('markers',JSON.stringify(markers))

  }

}