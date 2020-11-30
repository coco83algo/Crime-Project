import { Component, Input, OnInit } from '@angular/core';
import { Force } from '../../Interfaces/Force';
import { ForceDetails } from '../../Interfaces/ForceDetails';
import { ForceOfficer } from '../../Interfaces/ForceOfficer';
import { ForcesListService } from '../../Services/forces-list-service/forces-list.service';

@Component({
  selector: 'cpa-force-details',
  template: `
    <p></p>
    <!--Pour l'instant je ne l'ai pas mis parce que ça ne fonctionne pas
    Mais ça sera la forme finale pour les détails d'une force affichée-->
    <div *ngIf="forceDetail">
      <div>Unique force identifier : {{forceDetail.id}} </div>
      <div>Forn name : {{forceDetail.name}} </div>
      <div [innerHtml]="forceDetail.description"></div>
      <div>Force website URL : {{forceDetail.url}} </div>
      <div>Force telephone number : {{forceDetail.telephone}} </div>
    </div>
    <!--<span>Officer Name : {{forceOfficer.name}} </span>
    <span>Officer Rank : {{forceOfficer.rank}} </span>
    <span>Officer Bio : {{forceOfficer.bio}} </span>-->

  `,
  styles: [],
})

export class ForceDetailsComponent implements OnInit {
  @Input() force!: Force;
  @Input() forceDetail!: ForceDetails;
  @Input() forceOfficer!: ForceOfficer;

  constructor(private forceslistService: ForcesListService) {}

  ngOnInit(): void {}
}
