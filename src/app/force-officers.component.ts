import { Component, OnInit, Input } from '@angular/core';
import { ForceOfficer } from './Interfaces/ForceOfficer';

@Component({
  selector: 'cpa-force-officers',
  template: `
    <div *ngIf="forceOfficer;else elseTemplate">
      <div *ngFor="let currentOfficer of forceOfficer">
        <div style="font-weight:bold">Officer Name : {{currentOfficer.name}} </div>
        <div style="font-weight:bold">Officer Rank : {{currentOfficer.rank}} </div>
        <div [innerHtml]="currentOfficer.bio"></div>
      </div>
    </div>
    <!-- soucis : ce template ne s'affiche pas quand pas de liste dispo-->
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
