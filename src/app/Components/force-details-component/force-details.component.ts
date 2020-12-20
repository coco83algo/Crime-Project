import { Component, Input, OnInit } from '@angular/core';
import { ForceDetails } from '../../Interfaces/ForceDetails';
import { ForcesListService } from '../../Services/forces-list-service/forces-list.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'cpa-force-details',
  templateUrl: 'forceDetails.html',
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
  }
}
