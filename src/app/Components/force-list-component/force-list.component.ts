import { Component, Input, OnInit } from '@angular/core';
import { Force } from '../../Interfaces/Force';
import { ForceDetails } from '../../Interfaces/ForceDetails';
import { ForceOfficer } from '../../Interfaces/ForceOfficer';
import { ForcesListService } from '../../Services/forces-list-service/forces-list.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'cpa-force-list',
  template: `
    <p>This is the list of forces in this area :</p>
    <!--<ul>
      <li *ngFor="let currentForce of forces">
        <cpa-force [force]="currentForce"> </cpa-force>
      </li>
    </ul>-->
    <div>
    <button (click)="getForces()">Show all Forces</button>
    <ul>
       <li *ngFor="let currentForce of forceList | async">
          <cpa-force [force]="currentForce"></cpa-force>
          <button (click)="getForceDetails(currentForce)">Details</button>
          <button (click)="getForceOfficers(currentForce)">Officers</button>
          <cpa-force-details *ngIf="currentForce === selected" [forceDetail]="forceListDetails | async"></cpa-force-details>
       </li>
    </ul>
   <!-- <ul>
      <li *ngFor="let currentPoliceOfficer of forceListOfficers">
          Name: {{ currentPoliceOfficer.name }}
          Rank: {{ currentPoliceOfficer.rank }}
          Bio: {{ currentPoliceOfficer.bio }}
          </li>
    </ul>
      <li>
            Phone: {{ forceListDetails.telephone }}
            Url: {{ forceListDetails.url }}
            Description: {{ forceListDetails.description }}
        </li>-->
  `,
  styles: []
})

export class ForceListComponent implements OnInit {
  forceList!: Observable<Force[]>;
  forceListDetails!: Observable<ForceDetails>;
  forceListOfficers!: Observable<ForceOfficer[]>;
  forces!: Force[];
  isOfficerDisplay = false;
  selected!: Force;

  constructor(private forceslistService: ForcesListService, private httpClient: HttpClient) {}

  ngOnInit(): void {
  }

  getForces(): void {
    this.forceList = this.forceslistService.getForceFromServer();
  }

  getForceDetails(currentForce: Force): void{
    this.forceListDetails = this.forceslistService.getForceDetailsFromServer(currentForce.id);
    console.log('Recu dans list:' + this.forceListDetails);
    this.selected = currentForce;
  }

  getForceOfficers(currentForce: Force): void{
    this.forceListOfficers = this.forceslistService.getForceOfficersFromServer(currentForce.id);
    this.selected = currentForce;
  }

}
