import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

@Injectable()
export class SocketService {
socket: SocketIOClient.Socket;
markers: any;
  constructor() {
    this.socket = io.connect();
  }

  on(eventName: any, callback: any) {
      if (this.socket) {
        this.socket.on(eventName, function(data: any) {
          callback(data);
        });
        //var markers = localStorage.getItem('markers');
        //markers += this.socket;
        
      }
    };

  emit(eventName: any, data: any) {
      if (this.socket) {
        this.socket.emit(eventName, data);
        //localStorage.setItem('markers', this.markers);
      }
    };

  removeListener(eventName: any) {
      if (this.socket) {
        this.socket.removeListener(eventName);
      }
    };

}