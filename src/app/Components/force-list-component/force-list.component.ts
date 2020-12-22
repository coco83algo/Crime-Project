import { Component, Input, OnInit } from '@angular/core';
import { Force } from '../../Interfaces/Force';
import { ForcesListService } from '../../Services/forces-list-service/forces-list.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'cpa-force-list',
  templateUrl: 'forceList.html',
  styleUrls: ['forces.css']
})

export class ForceListComponent implements OnInit {
  forceList!: Observable<Force[]>;
  forces!: Force[];

  constructor(private forceslistService: ForcesListService) {}

  ngOnInit(): void {
    this.getForces();
  }

  getForces(): void {
    this.forceList = this.forceslistService.getForceFromServer();
  }
}
