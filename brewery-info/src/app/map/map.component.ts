import { Component, AfterViewInit, Input } from '@angular/core';

import * as L from 'leaflet';
import { Brewery } from '../brewery';

@Component({

  selector: 'app-map',

  templateUrl: './map.component.html',

  styleUrls: ['./map.component.scss']

})

export class MapComponent implements AfterViewInit {
  @Input() brewery?: Brewery;

  private map: any;

  private initMap(): void {

    this.map = L.map('map', {

      center: [ Number(this.brewery?.latitude), Number(this.brewery?.longitude) ],

      zoom: 16

    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {

      maxZoom: 18,

      minZoom: 3,

      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'

    });

    const myIcon = L.icon({
      iconUrl: '../../assets/img/cheers.png',
      iconSize: [50, 50],
      iconAnchor: [25, 50],
    })

    const marker = L.marker([ Number(this.brewery?.latitude), Number(this.brewery?.longitude) ], {icon: myIcon})



    tiles.addTo(this.map);
    marker.addTo(this.map);

  }

  constructor() { }

  ngAfterViewInit(): void {

    this.initMap();

  }

}
