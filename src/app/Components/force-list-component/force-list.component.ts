import { Component, Input, OnInit } from '@angular/core';
import { Force } from '../../Interfaces/Force';
import { ForceDetails } from '../../Interfaces/ForceDetails';
import { ForceOfficer } from '../../Interfaces/ForceOfficer';
import { ForcesListService } from '../../Services/forces-list-service/forces-list.service';
import { HttpClient } from '@angular/common/http';

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
       <li *ngFor="let currentForce of forceList">
          <cpa-force [force]="currentForce"></cpa-force>
          <button (click)="getForceDetails(currentForce)">Details</button>
          <button (click)="getForceOfficers(currentForce)">Officers</button>
       </li>
    </ul>
    </div>
        <ul>
          <li *ngFor="let currentForceOfficer of forceListOfficers">
              Name: {{ currentForceOfficer.name }}
              Rank: {{ currentForceOfficer.rank }}
              Bio: {{ currentForceOfficer.bio }}
          </li>
        </ul>
  `,
  styles: []
})

export class ForceListComponent implements OnInit {
  forceList: Force[] = [];
  forceListDetails: ForceDetails[] = [];
  forceListOfficers: ForceOfficer[] = [];
  forces!: Force[];
  isOfficerDisplay = false;

  constructor(private forceslistService: ForcesListService, private httpClient: HttpClient) {}

  ngOnInit(): void {
  }

  getForces(): void {
    this.forceList = this.forceslistService.getForceFromServer();
  }

  getForceDetails(currentForce: Force): void{
    this.forceListDetails = this.forceslistService.getForceDetailsFromServer(currentForce.id);
  }

  getForceOfficers(currentForce: Force): void{
    this.forceListOfficers = this.forceslistService.getForceOfficersFromServer(currentForce.id);
  }

}
