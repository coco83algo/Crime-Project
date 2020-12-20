import { Component, Input, OnInit } from '@angular/core';
import { ForceDetails } from '../../Interfaces/ForceDetails';
import { ForcesListService } from '../../Services/forces-list-service/forces-list.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'cpa-force-details',
  template: `
    <div *ngIf="forceDetail">
      <cpa-navbar></cpa-navbar>
          <div class="line">
        <div class="container left">
          <div class="content">
            <h2>Unique force identifier</h2>
            <p>{{forceDetail.id}}</p>
          </div>
        </div>
        <div class="container right">
          <div class="content">
            <h2>Forn name</h2>
            <p>{{forceDetail.name}}</p>
          </div>
        </div>
        <div class="container left">
          <div class="content">
            <h2>Description</h2>
            <div [innerHtml]="forceDetail.description"></div>
          </div>
        </div>
        <div class="container right">
          <div class="content">
            <h2>Website and telephone</h2>
            <p>{{forceDetail.url}}</p>
            <p>{{forceDetail.telephone}}</p>
          </div>
        </div>
        <div class="container left">
          <div class="content">
            <h2>Engagement methods</h2>
            <div *ngFor="let methods of forceDetail.engagement_methods">
              <b>{{methods.title}}</b>
              <p [innerHtml]="forceDetail.description"></p>
              <p class="urlmethod">{{methods.url}}</p>
              <p></p>
          </div>
        </div>
      </div>
    </div>
    <div class="return"><button class="btn" (click)="backClicked()">Go back to forces</button></div>
  `,
  styleUrls: ['forceDetails.css']
})

export class ForceDetailsComponent implements OnInit {
  @Input() forceDetail?: ForceDetails;

  constructor(private forceslistService: ForcesListService, private activeRoute: ActivatedRoute, private _location: Location) {}

  backClicked() {
    this._location.back();
  }

  ngOnInit(): void {
  this.activeRoute.paramMap.subscribe((params: ParamMap) => {
    const force = params.get('currentForce');
    this.forceslistService.getForceDetailsFromServer(force).subscribe(forceDetail => (this.forceDetail = forceDetail));
    });
    //console.log(this.forceDetail);
  }
}
