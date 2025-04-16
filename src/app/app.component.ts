import { Component } from '@angular/core';
import { MapboxComponent } from './mapbox/mapbox.component';

@Component({
  selector: 'app-root',
  imports: [MapboxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {

  constructor(){}

  title = 'client';



}
