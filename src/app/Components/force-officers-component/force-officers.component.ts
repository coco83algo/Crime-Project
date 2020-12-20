import { Component, OnInit, Input } from '@angular/core';
import { ForceOfficer } from '../../Interfaces/ForceOfficer';
import { ForcesListService } from '../../Services/forces-list-service/forces-list.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'cpa-force-officers',
  template: `
    <ng-container *ngIf="forceOfficer && forceOfficer.length; else noInfo">
      <div *ngFor="let currentOfficer of forceOfficer">
        <div class="line">
            <div class="container left">
              <div class="content">
                <h2>{{currentOfficer.rank}} {{currentOfficer.name}}</h2>
                <p [innerHtml]="currentOfficer.bio"></p>
              </div>
            </div>
          </div>
        </div>
    </ng-container>

    <ng-template #noInfo>
      <div class="alternative ">
        <h1 class="text-center">We are sorry : no information available...</h1>
      </div>
    </ng-template>
    <div class="return"><button class="btn" (click)="backClicked()">Go back to forces</button></div>

  `,
  styleUrls: ['forceOfficers.css']
})

export class ForceOfficersComponent implements OnInit {
  @Input() forceOfficer!: ForceOfficer[];

  constructor(private forceslistService: ForcesListService, private activeRoute: ActivatedRoute, private _location: Location) { }

  backClicked() {
    this._location.back();
  }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe((params: ParamMap) => {
      const force = params.get('currentForce');
      this.forceslistService.getForceOfficersFromServer(force).subscribe(forceOfficer => ( this.forceOfficer = forceOfficer));
      });
      console.log(this.forceOfficer);
    }
}
