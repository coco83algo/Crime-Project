import { Injectable } from '@angular/core';
import { Force } from '../../Interfaces/Force';
import { ForceDetails } from '../../Interfaces/ForceDetails';
import { ForceOfficer } from '../../Interfaces/ForceOfficer';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ForcesListService {
  forceList: Force[] = [];
  forceListDetails!: ForceDetails;
  forceListOfficers: ForceOfficer[] = [];

  constructor(private httpClient: HttpClient) { }
  /*getForces(): Observable<Force[]> {
    return of(FORCELIST);
  }*/

  getForceFromServer(): Observable<Force[]> {
    return this.httpClient
      .get<Force[]>('https://data.police.uk/api/forces');
  }

  getForceDetailsFromServer(currentForceId: number): Observable<ForceDetails> {
    return this.httpClient
        .get<ForceDetails>('https://data.police.uk/api/forces' + '/' + currentForceId);
  }

  getForceOfficersFromServer(currentForceId: number): Observable<ForceOfficer[]> {
    return this.httpClient
        .get<ForceOfficer[]>('https://data.police.uk/api/forces' + '/' + currentForceId + '/people');
  }
}
