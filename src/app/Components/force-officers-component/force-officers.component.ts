import { Component, OnInit, Input } from '@angular/core';
import { ForceOfficer } from '../../Interfaces/ForceOfficer';
import { ForcesListService } from '../../Services/forces-list-service/forces-list.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'cpa-force-officers',
  template: `
    <ng-container *ngIf="forceOfficer && forceOfficer.length; else noInfo">
      <div *ngFor="let currentOfficer of forceOfficer">
        <div>Officer Name : {{currentOfficer.name}} </div>
        <div>Officer Rank : {{currentOfficer.rank}} </div>
        <div [innerHtml]="currentOfficer.bio"></div>
      </div>
    </ng-container>

    <ng-template #noInfo>
      <div class="alternative">
        No information available
      </div>
    </ng-template>

  `,
  styles: [
  ]
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
