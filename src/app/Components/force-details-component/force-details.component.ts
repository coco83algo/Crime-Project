import { Component, Input, OnInit } from '@angular/core';
import { ForceDetails } from '../../Interfaces/ForceDetails';
import { ForcesListService } from '../../Services/forces-list-service/forces-list.service';

@Component({
  selector: 'cpa-force-details',
  template: `
    <div *ngIf="forceDetail">
      <div>Unique force identifier : {{forceDetail.id}} </div>
      <div>Forn name : {{forceDetail.name}} </div>
      <!--<div [innerHtml]="forceDetail.description"></div>-->
      <div>Force website URL : {{forceDetail.url}} </div>
      <div>Force telephone number : {{forceDetail.telephone}} </div>
    </div>
  `,
  styles: [],
})

export class ForceDetailsComponent implements OnInit {
  @Input() forceDetail!: ForceDetails;

  constructor(private forceslistService: ForcesListService) {} // enlever constructeur ?

  ngOnInit(): void {}
}
