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
  forceListDetails: ForceDetails[] = [];
  forceListOfficers: ForceOfficer[] = [];

  isDetailsDisplay = false;
  isOfficerDisplay = false;

  constructor(private httpClient: HttpClient) { }
  /*getForces(): Observable<Force[]> {
    return of(FORCELIST);
  }*/

  getList() {
    return this.forceList;
  }

  getForceFromServer() {
    this.httpClient.
    get<Force[]>('https://data.police.uk/api/forces')
      .subscribe(
        (response: Force[]) => {
          this.forceList = response;
          console.log('Reçu !');
          console.log(this.forceList);
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
    return this.forceList;
  }

  getForceDetailsFromServer(currentForceId: number) {
    this.httpClient
        .get<ForceDetails[]>('https://data.police.uk/api/forces' + '/' + currentForceId)
        .subscribe(
          (response: ForceDetails[]) => {
            this.forceListDetails = response;
            // this.isDetailsDisplay = !this.isDetailsDisplay;
            // this.isOfficerDisplay = false;
            console.log(this.forceListDetails);
            console.log('Details reçus !');
          },
          (error) => {
            console.log('Erreur ! : ' + error);
          }
        );
    return this.forceListDetails;
  }

  getForceOfficersFromServer(currentForceId: number) {
    this.httpClient
        .get<ForceOfficer[]>('https://data.police.uk/api/forces' + '/' + currentForceId + '/people')
        .subscribe(
          (response: ForceOfficer[]) => {
            this.forceListOfficers = response;
           // this.isDetailsDisplay = false;
           // this.isOfficerDisplay = !this.isOfficerDisplay;
            console.log('Officiers reçus !');
            console.log(this.forceListOfficers);
          },
          (error) => {
            console.log('Erreur ! : ' + error);
          }
        );
    return this.forceListOfficers;
  }
}
