import { Component, Input, OnInit } from '@angular/core';
import { CrimesService } from '../crimes.service';
import { Crime } from '../Interfaces/Crime';

@Component({
  selector: 'cpa-crime-details',
  template:  `
  <div *ngIf="crimeDetail">
    <div>Crime ID : {{ crimeDetail.id }} </div>
    <div>Crime category : {{ crimeDetail.category }} </div>
    <div>Status : {{ crimeDetail.outcome_status.category ? crimeDetail.outcome_status.category : 'No information available' }} </div>
    <div>Date : {{ crimeDetail.outcome_status.date ? crimeDetail.outcome_status.date : 'No information available' }} </div>
</div>
<div *ngIf="crimeDetail === []"> No information available</div>

`,
  styles: []
})
export class CrimeDetailsComponent implements OnInit {
  @Input() crimeDetail!: Crime;

  constructor(private crimesService: CrimesService) { }

  ngOnInit(): void {
  }

}
