import { Component, OnInit, Input } from '@angular/core';
import { ForceOfficer } from '../../Interfaces/ForceOfficer';
import { ForcesListService } from '../../Services/forces-list-service/forces-list.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

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
            <div class="container right">
              <div class="content">
                <h2>Contact information</h2>
                <p>{{currentOfficer}}</p>
              </div>
            </div>
          </div>
        </div>
    </ng-container>

    <ng-template #noInfo>
      <div class="alternative">
        <h2>No information available</h2>
      </div>
    </ng-template>

  `,
  styleUrls: ['forceOfficers.css']
})

export class ForceOfficersComponent implements OnInit {
  @Input() forceOfficer!: ForceOfficer[];

  constructor(private forceslistService: ForcesListService, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe((params: ParamMap) => {
      const force = params.get('currentForce');
      this.forceslistService.getForceOfficersFromServer(force).subscribe(forceOfficer => ( this.forceOfficer = forceOfficer));
      });
    }
}
