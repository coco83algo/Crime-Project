import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Crime } from 'src/app/Interfaces/Crime';

@Injectable({
  providedIn: 'root'
})
export class CrimesService {

  constructor(private httpClient: HttpClient) { }

  getCrimesFromServer(currentForceId: string): Observable<Crime[]> {
    console.log(currentForceId);
    return this.httpClient
        .get<Crime[]>('https://data.police.uk/api/crimes-no-location?category=all-crime&force=' + currentForceId.toLowerCase());
  }

  getCrimesWithDateFromServer(currentForceId: string, month: string): Observable<Crime[]> {
    console.log(currentForceId);
    return this.httpClient
        .get<Crime[]>('https://data.police.uk/api/crimes-no-location?category=all-crime&force=' + currentForceId + "&date=2020-" + month);
  }
}
