import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = "http://100.103.37.7:4000";
  constructor(private http: HttpClient) { }

  public get(){
    return this.http.get(this.apiUrl + "/shipwrecks");
  }




}
