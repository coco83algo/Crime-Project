import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private httpClient: HttpClient) { }

  getUKjson1(){
    return this.httpClient.get('assets/UKforces.geojson');
  }

  getUKjson2(){
    return this.httpClient.get('assets/UKforces2.geojson');
  }
}
