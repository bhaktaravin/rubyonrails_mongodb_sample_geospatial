import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from '../environment';

@Component({
  selector: 'app-mapbox',
  imports: [],
  templateUrl: './mapbox.component.html',
  styleUrl: './mapbox.component.css'
})
export class MapboxComponent implements OnInit{

  map: mapboxgl.Map | undefined;
  style  = 'mapbox://styles/mapbox/streets-v11';


  ngOnInit(): void {
    this.map = new mapboxgl.Map({
          container: 'map',
          style: this.style,
          zoom: 13,
          accessToken: environment.mapbox.accessToken

        });
        this.map.addControl(new mapboxgl.NavigationControl());

  }





}
