import { Component, OnInit, Input } from '@angular/core';
import { ForceOfficer } from './Interfaces/ForceOfficer';

@Component({
  selector: 'cpa-force-officers',
  template: `
    <div *ngIf="forceOfficer;else elseTemplate">
      <div *ngFor="let currentOfficer of forceOfficer">
        <div>Officer Name : {{currentOfficer.name}} </div>
        <div>Officer Rank : {{currentOfficer.rank}} </div>
        <div [innerHtml]="currentOfficer.bio"></div>
      </div>
    </div>

    <ng-template #elseTemplate>
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

  constructor() { }

  ngOnInit(): void {
  }

}
