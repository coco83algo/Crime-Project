import { Component, Input, OnInit } from '@angular/core';
import { CrimesService } from '../../Services/crimes-service/crimes.service';
import { Crime } from '../../Interfaces/Crime';

@Component({
  selector: 'cpa-crime-details',
  templateUrl: 'crimeDetails.html',
  styles: []
})
export class CrimeDetailsComponent implements OnInit {
  @Input() crimeDetail!: Crime;

  constructor(private crimesService: CrimesService) { }

  ngOnInit(): void {
  }

}
