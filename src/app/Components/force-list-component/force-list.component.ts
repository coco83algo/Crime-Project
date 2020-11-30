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
          <cpa-force-officers *ngIf="currentForce === selected" [forceOfficer]="forceListOfficers | async"></cpa-force-officers>
       </li>
    </ul>
    <!--<div *ngFor="let currentOfficer of forceListOfficers | async">
      <cpa-force-officers *ngIf="currentOfficer === selectedOfficer" [forceOfficer]="currentOfficer"></cpa-force-officers>
    </div> -->
  `,
  styles: []
})

export class ForceListComponent implements OnInit {
  forceList!: Observable<Force[]>;
  forceListDetails!: Observable<ForceDetails>;
  forceListOfficers!: Observable<ForceOfficer[]>;
  forces!: Force[];
  selected!: Force;
  selectedOfficer!: ForceOfficer;

  constructor(private forceslistService: ForcesListService, private httpClient: HttpClient) {}

  ngOnInit(): void {
  }

  getForces(): void {
    this.forceList = this.forceslistService.getForceFromServer();
  }

  getForceDetails(currentForce: Force): void{
    this.forceListDetails = this.forceslistService.getForceDetailsFromServer(currentForce.id);
    this.selected = currentForce;
  }

  getForceOfficers(currentForce: Force): void{
    this.forceListOfficers = this.forceslistService.getForceOfficersFromServer(currentForce.id);
    this.selected = currentForce;
    console.log(this.forceListOfficers);
  }

}
