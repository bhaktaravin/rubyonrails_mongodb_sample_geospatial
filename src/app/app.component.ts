import { Component } from '@angular/core';
import { TableviewComponent } from './tableview/tableview.component';

@Component({
  selector: 'app-root',
  imports: [TableviewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {

  constructor(){}

  title = 'client';



}
