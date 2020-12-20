import { Component, OnInit, Input } from '@angular/core';
import { ForceOfficer } from '../../Interfaces/ForceOfficer';
import { ForcesListService } from '../../Services/forces-list-service/forces-list.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'cpa-force-officers',
  templateUrl: './forceOfficers.html',
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
