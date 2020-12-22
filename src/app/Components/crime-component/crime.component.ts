import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CrimesService } from '../../Services/crimes-service/crimes.service';
import { ForcesListService } from '../../Services/forces-list-service/forces-list.service';
import { Crime } from '../../Interfaces/Crime';

@Component({
  selector: 'cpa-crime-component',
  templateUrl: 'crime.html',
  styleUrls: ['crime.css'],
})
export class CrimeComponent implements OnInit {
  crimeList: Array<Crime[]> = new Array();
  isSubmitted = false;
  Force: any = [];
  months: string[] = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'];

  constructor(public fb: FormBuilder, private crimesService: CrimesService, private forceslistService: ForcesListService, private httpClient: HttpClient) {}

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
        this.crimesService.getCrimesWithDateFromServer(this.registrationForm.value.forceName.toLowerCase(), month)
        .subscribe(response => {this.crimeList.push(response);});
      }
    });
  }

  ngOnInit(): void {
    this.forceslistService.getForceFromServer()
      .subscribe((response) => {
        this.Force = response;
      });
  }
}
