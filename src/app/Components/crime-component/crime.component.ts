import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CrimesService } from '../../Services/crimes-service/crimes.service';
import { Crime } from '../../Interfaces/Crime';
import { Force } from '../../Interfaces/Force';

@Component({
  selector: 'cpa-crime-component',
  templateUrl: 'crime.html',
  styleUrls: ['crime.css'],
})
export class CrimeComponent implements OnInit {
  crimeList: Array<Crime[]> = new Array();
  isSubmitted = false;
  Force: any = [];
  months: string[] = ['01', '02', '03','04','05','06','07','08','09','10','11'];

  constructor(public fb: FormBuilder, private crimesService: CrimesService, private httpClient: HttpClient) {}

  // Form
  registrationForm = this.fb.group({
    forceName: ['', [Validators.required]],
  });

  get forceName() {
    return this.registrationForm.get('forceName');
  }

  // Choose a force using select dropdown
  changeForce(e: { value: any; target: { value: any } }) {
    this.forceName &&
      this.forceName.setValue(e.target.value, {
        onlySelf: true,
      });
  }

  getCrimes(months: string[]) {
    this.isSubmitted = true;
    this.crimeList = []
    months.forEach(month => {
      if(this.registrationForm.valid) {
        this.httpClient
        .get<Crime[]>('https://data.police.uk/api/crimes-no-location?category=all-crime&force=' + this.registrationForm.value.forceName.toLowerCase() + "&date=2020-" + month)
        .subscribe(response => {this.crimeList.push(response);});
      }
    });
  }

  ngOnInit(): void {
    this.httpClient
      .get<Force[]>('https://data.police.uk/api/forces')
      .subscribe((response) => {
        this.Force = response;
      });
  }
}
