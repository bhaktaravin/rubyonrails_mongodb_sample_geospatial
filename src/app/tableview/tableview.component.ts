import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { ApiService } from '../api.service';
import { environment } from '../environment';

@Component({
  selector: 'app-tableview',
  imports: [],
  templateUrl: './tableview.component.html',
  styleUrl: './tableview.component.css'
})
export class TableviewComponent implements OnInit{

  shipwrecks: any;

  map: mapboxgl.Map | undefined;
  style  = 'mapbox://styles/mapbox/streets-v11';



  constructor(private apiService: ApiService){}

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
