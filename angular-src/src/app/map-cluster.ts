import { Directive, Input, OnInit } from '@angular/core';
import { GoogleMapsAPIWrapper } from '@agm/core';
//import { GoogleMap, Marker } from 'angular2-google-maps/core/services/google-maps-types';
//import { MarkerManager } from 'angular2-google-maps/core/services/managers/marker-manager';
//import {ClusterManager} from '@agm/js-marker-clusterer/services/managers/cluster-manager';
// npm install js-marker-clusterer --save
import {MarkerService} from "./services/marker.service";
import { SocketService } from './components/shared/socket.service';
import 'js-marker-clusterer/src/markerclusterer.js';
import { Observable } from 'rxjs';

declare const google;
declare const MarkerClusterer;

@Directive({
  selector: 'map-cluster',
  providers: [GoogleMapsAPIWrapper]
})

export class MapCluster implements OnInit{
  @Input() public points: any[];
  public markerCluster: any;
  public markers: any[] = [];

  googleMarkers : any;
  _map: any;
  
  lat: number =  6.4471;
  lng: number = 3.4182;
  zoom: number = 14;


   initMarkers(){
    let i = 0;
    let markers = this.markers;
    var result = [];
    for ( ; i < markers.length; ++i ){
       result.push( new google.maps.Marker({
            position : markers[ i ] 
        })
       );
    }
      
    return result;
  }

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


  constructor (private gmapsApi: GoogleMapsAPIWrapper,  private markerService: MarkerService, 
    private _socketService: SocketService,) {
        //this.markers = this.markerService.getMarkers();

  }

public ngOnInit() {
    this.gmapsApi.getNativeMap().then((map) => {
      const markerIcon = {
        url: '/assets/m.png' // url
        //scaledSize: new google.maps.Size(50, 50)
      };

      const style = {
        url: '/assets/m2.png',
        height: 60,
        width: 60,
        textColor: '#FFF',
        textSize: 18,
        backgroundPosition: 'center center'
      };

      const options = {
        imagePath: '/assets/m2',
        gridSize: 70,
        styles: [style, style, style]
      };
      
      Observable
        .interval(500)
        .skipWhile((s) => this.points == null || this.points.length <= 0)
        .take(1)
        .subscribe(() => {
          if(this.markerCluster) {
            this.markerCluster.clearMarkers();
          }
          if (this.points.length > 0) {
            for (const point of this.points) {
              const marker = new google.maps.Marker({
                position: new google.maps.LatLng(point.Latitude, point.Longitude),
                icon: markerIcon
              });

              const contentString = '<div id="info-window"><strong>InfoWindow for Marker with:</strong> <br>' +
                                       'Latitude: ' + point.Latitude + '<br>' +
                                       'Longitude: ' + point.Longitude +
                                    '</div>';
              const infowindow = new google.maps.InfoWindow({
                content: contentString
              });
              
              google.maps.event.addListener(map, 'click', function($event){
                console.log('tester');
                var location = $event.latLng;           
                //var lng = e.lng;
                //Create a marker and placed it on the map.
                var newMarker = new google.maps.Marker({
                  loc: location,
                  map: map 
                });   
                //this.markers.push(newMarker);            
                this.markerCluster = new MarkerClusterer(map, this.newMarker, options);
                
                  /*
                  google.maps.event.addListener(marker, "click", function (e) {
                    var infoWindow = new google.maps.InfoWindow({
                    content: 'Latitude: ' + location.lat() + '<br />Longitude: ' + location.lng()
                    });
                      this.markers.push(newMarker); 
                      infowindow.open(map, newMarker);
                  });
                    */
                  
              });
              
              marker.addListener('mouseover', function() {
                infowindow.open(map, marker);
              });
              marker.addListener('mouseout', function() {
                infowindow.close(map, marker);
              });
              this.markers.push(marker);
              
            }
          } else {
            this.markers = [];
          }
          this.markerCluster = new MarkerClusterer(map, this.markers, options);
        });
    });
  }
}

