import { Component, Input, OnInit } from '@angular/core';
import { Force } from '../../Interfaces/Force';
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
    <button (click)="getForces()">Police</button>
    </div>
    <ul>
       <li *ngFor="let currentForce of forceList">
       {{ currentForce.id }} - {{ currentForce.name | titlecase }}
       <button (click)="getForceDetails(currentForce)">Details</button>
       <button (click)="getForceOfficers(currentForce)">Officers</button>
       </li>
    </ul>

  `,
  styles: [],
})

export class ForceListComponent implements OnInit {
  forceList: Force[] = [];
  forces!: Force[];

  constructor(private forceslistService: ForcesListService, private httpClient: HttpClient) {}

  ngOnInit(): void {
  }

  getForces(){
    this.forceList = this.forceslistService.getForceFromServer();
  }

  getForceDetails(currentForce: Force){
    this.forceslistService.getForceDetailsFromServer(currentForce.id);
  }

  getForceOfficers(currentForce: Force){
    this.forceslistService.getForceOfficersFromServer(currentForce.id);
  }

}
