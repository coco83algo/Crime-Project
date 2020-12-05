import { Injectable } from '@angular/core';
import { Force } from '../../Interfaces/Force';
import { ForceDetails } from '../../Interfaces/ForceDetails';
import { ForceOfficer } from '../../Interfaces/ForceOfficer';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ForcesListService {

  constructor(private httpClient: HttpClient) { }

  getForceFromServer(): Observable<Force[]> {
    return this.httpClient
      .get<Force[]>('https://data.police.uk/api/forces');
  }

  getForceDetailsFromServer(currentForceId: string): Observable<ForceDetails> {
    return this.httpClient
        .get<ForceDetails>('https://data.police.uk/api/forces' + '/' + currentForceId);
  }

  getForceOfficersFromServer(currentForceId: string): Observable<ForceOfficer[]> {
    return this.httpClient
        .get<ForceOfficer[]>('https://data.police.uk/api/forces' + '/' + currentForceId + '/people');
  }
}
