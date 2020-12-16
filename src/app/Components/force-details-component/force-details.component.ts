import { Component, Input, OnInit } from '@angular/core';
import { ForceDetails } from '../../Interfaces/ForceDetails';
import { ForcesListService } from '../../Services/forces-list-service/forces-list.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'cpa-force-details',
  template: `
    <div *ngIf="forceDetail">
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
            <h2>Contacts</h2>
            <p>{{forceDetail.url}}</p>
            <p>{{forceDetail.telephone}}</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['forceDetails.css']
})

export class ForceDetailsComponent implements OnInit {
  @Input() forceDetail?: ForceDetails;

  constructor(private forceslistService: ForcesListService, private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {
  this.activeRoute.paramMap.subscribe((params: ParamMap) => {
    const force = params.get('currentForce');
    this.forceslistService.getForceDetailsFromServer(force).subscribe(forceDetail => (this.forceDetail = forceDetail));
    });
  }
}
