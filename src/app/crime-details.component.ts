import { Component, Input, OnInit } from '@angular/core';
import { CrimesService } from './crimes.service';
import { Crime } from './Interfaces/Crime';

@Component({
  selector: 'cpa-crime-details',
  template:  `
  <div *ngIf="crimeDetail">
    <div>Crime ID : {{crimeDetail.id}} </div>
    <div>Crime category : {{crimeDetail.category}} </div>
    <div>Context : {{crimeDetail.context}} </div>
    <div>Location : {{crimeDetail.location}} </div>
    <!--<div>Status : {{crimeDetail.outcome_status}} </div>-->
  </div>
`,
  styles: [
  ]
})
export class CrimeDetailsComponent implements OnInit {
  @Input() crimeDetail!: Crime;
  constructor(private crimesService: CrimesService) { }

  ngOnInit(): void {
  }

}
