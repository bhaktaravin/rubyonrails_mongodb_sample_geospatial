import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-mapbox',
  imports: [],
  templateUrl: './mapbox.component.html',
  styleUrl: './mapbox.component.css'
})
export class MapboxComponent implements OnInit{

  map: mapboxgl.Map | undefined;
  style  = 'mapbox://styles/mapbox/streets-v12';

  accessToken = process.env['MAPBOX_KEY']

  ngOnInit(): void {
    this.map = new mapboxgl.Map({
          container: 'map',
          style: this.style,
          zoom: 1,
          accessToken: this.accessToken

        });
        this.map.addControl(new mapboxgl.NavigationControl());

  }





}
