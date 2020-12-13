import { Component, Input, OnInit } from '@angular/core';
import { Force } from '../../Interfaces/Force';
import { ForceDetails } from '../../Interfaces/ForceDetails';
import { ForceOfficer } from '../../Interfaces/ForceOfficer';
import { ForcesListService } from '../../Services/forces-list-service/forces-list.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'cpa-force-list',
  template: `
    <h1 class="display-5">This is the list of forces in this area :</h1>
    <div>
    <ul>
       <li *ngFor="let currentForce of forceList | async">
          <cpa-force [force]="currentForce"></cpa-force>
          <a [routerLink]="['/forces', currentForce.id]">
            <button>Details</button>
          </a>
          <a [routerLink]="['/forces', currentForce.id, 'officers']">
            <button>Officers</button>
          </a>
          <!--<cpa-force-details *ngIf="currentForce === selected" [forceDetail]="forceListDetails | async"></cpa-force-details>
          <cpa-force-officers *ngIf="currentForce === selectedOfficer" [forceOfficer]="forceListOfficers | async"></cpa-force-officers>
--></li>
    </ul>
  `,
styleUrls: ['crime.css']
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
    this.getForces();
  }

  getForces(): void {
    this.forceList = this.forceslistService.getForceFromServer();
  }

  /*getForceDetails(currentForce: Force): void{
    this.forceListDetails = this.forceslistService.getForceDetailsFromServer(currentForce.id);
    this.selected = currentForce;
    // console.log(this.selected);
  }

  getForceOfficers(currentForce: Force): void{
    this.forceListOfficers = this.forceslistService.getForceOfficersFromServer(currentForce.id);
    this.selectedOfficer = currentForce;
    // console.log(this.selectedOfficer);
  }*/

}
