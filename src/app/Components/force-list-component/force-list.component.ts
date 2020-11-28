import { Component, OnInit } from '@angular/core';
import { Force } from '../../Interfaces/Force';
import { ForcesListService } from '../../Services/forces-list-service/forces-list.service';

@Component({
  selector: 'cpa-force-list',
  template: `
    <p>This is the list of forces in this area :</p>
    <ul>
      <li *ngFor="let currentForce of forces">
        <cpa-force [force]="currentForce"> </cpa-force>
      </li>
    </ul>
  `,
  styles: [],
})

export class ForceListComponent implements OnInit {
  constructor(private forceslistService: ForcesListService) {}
  forces!: Force[];
  ngOnInit(): void {
    this.getForces();
  }
  getForces(): void {
    this.forceslistService.getForces()
      .subscribe(forces => this.forces = forces);
  }
}
