import { Component, Input, OnInit } from '@angular/core';
import { ForceDetails } from '../../Interfaces/ForceDetails';
import { ForcesListService } from '../../Services/forces-list-service/forces-list.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'cpa-force-details',
  template: `
    <div *ngIf="forceDetail">
      <div>Unique force identifier : {{forceDetail.id}} </div>
      <div>Forn name : {{forceDetail.name}} </div>
      <div [innerHtml]="forceDetail.description"></div>
      <div>Force website URL : {{forceDetail.url}} </div>
      <div>Force telephone number : {{forceDetail.telephone}} </div>
    </div>
  `,
  styles: [],
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
