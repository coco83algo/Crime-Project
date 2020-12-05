import { Component, Input, OnInit } from '@angular/core';
import { Force } from '../../Interfaces/Force';
import { ForceDetails } from '../../Interfaces/ForceDetails';
import { ForceOfficer } from '../../Interfaces/ForceOfficer';
import { ForcesListService } from '../../Services/forces-list-service/forces-list.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'cpa-force-list',
  template: `
    <p>This is the list of forces in this area :</p>
    <div>
    <button (click)="getForces()">Show all Forces</button>
    <ul>
       <li *ngFor="let currentForce of forceList | async">
          <cpa-force [force]="currentForce"></cpa-force>
          <button (click)="getForceDetails(currentForce)">Details</button>
          <button (click)="getForceOfficers(currentForce)">Officers</button>
          <cpa-force-details *ngIf="currentForce === selected" [forceDetail]="forceListDetails | async"></cpa-force-details>
          <cpa-force-officers *ngIf="currentForce === selectedOfficer" [forceOfficer]="forceListOfficers | async"></cpa-force-officers>
       </li>
    </ul>
  `,
  styles: []
})

export class ForceListComponent implements OnInit {
  forceList!: Observable<Force[]>;
  forceListDetails!: Observable<ForceDetails>;
  forceListOfficers!: Observable<ForceOfficer[]>;
  forces!: Force[];
  selected!: Force;
  selectedOfficer!: Force;

  constructor(private forceslistService: ForcesListService) {}

  ngOnInit(): void {
  }

  getForces(): void {
    this.forceList = this.forceslistService.getForceFromServer();
  }

  getForceDetails(currentForce: Force): void{
    this.forceListDetails = this.forceslistService.getForceDetailsFromServer(currentForce.id);
    this.selected = currentForce;
    // console.log(this.selected);
  }

  getForceOfficers(currentForce: Force): void{
    this.forceListOfficers = this.forceslistService.getForceOfficersFromServer(currentForce.id);
    this.selectedOfficer = currentForce;
    // console.log(this.selectedOfficer);
  }

}
