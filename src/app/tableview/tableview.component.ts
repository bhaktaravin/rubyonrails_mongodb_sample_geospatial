import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-tableview',
  imports: [NgFor],
  templateUrl: './tableview.component.html',
  styleUrl: './tableview.component.css'
})
export class TableviewComponent implements OnInit{

  shipwrecks: any;




  constructor(private apiService: ApiService){}

  ngOnInit(): void {
    this.apiService.get().subscribe((data:any) => {
      console.log(data);
      this.shipwrecks = data['data'];
    });
  }
}
