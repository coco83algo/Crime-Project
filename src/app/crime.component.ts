import { LowerCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CrimesService } from './crimes.service';
import { Crime } from './Interfaces/Crime';

@Component({
  selector: 'cpa-crime-component',
  template: `
    <div class="text-center">
	<h1 class="display-5">
		Choose your force to see crimes
	</h1>
</div>

<div class="container">
	<div class="row custom-wrapper">
		<div class="col-md-12">

			<!-- Form starts -->
			<form [formGroup]="registrationForm" (ngSubmit)="getCrimes()">
				<div class="group-gap">
					<div class="d-block my-3">

          <div class="mb-3">
            <select class="custom-select" (change)="changeForce($event)" formControlName="forceName">
              <option value="">Choose a force name</option>
              <option *ngFor="let force of Force" [ngValue]="force">{{force}}</option>
            </select>

            <!-- error block -->
            <div class="invalid-feedback" *ngIf="isSubmitted && forceName.errors?.required">
              <sup>*</sup>Please choose a force name
            </div>
          </div>

          </div>
        </div>

          <!-- Submit Button -->
          <button type="submit" class="btn btn-danger btn-lg btn-block">Submit</button>
      </form><!-- Form ends -->

    </div>
  </div>
</div>

<ul>
    <li *ngFor="let currentCrime of crimeList | async">
    <cpa-crime-details [crimeDetail]="currentCrime"></cpa-crime-details>
    </li>
</ul>
`
  ,
  styleUrls: ['./crime.css']
})
export class CrimeComponent implements OnInit {

  constructor(public fb: FormBuilder, private crimesService: CrimesService) {}

  crimeList!: Observable<Crime[]>;
  isSubmitted = false;
  Force: any = ['Avon-and-somerset',
  'Bedfordshire ',
  'Cambridgeshire ',
  'Cheshire',
  'City-of-london',
  'Cleveland',
  'Cumbria',
  'Derbyshire'
  ];

  get forceName() {
    return this.registrationForm.get('forceName');
  }
  /* Form */
  registrationForm = this.fb.group({
    forceName: ['', [Validators.required]]
  });


  // Choose city using select dropdown
  changeForce(e: { value: any; target: { value: any; }; }) {
    this.forceName.setValue(e.target.value, {
      onlySelf: true
    });
  }

  // tslint:disable-next-line: typedef
  /*onSubmit() {
    this.isSubmitted = true;
    if (!this.registrationForm.valid) {
      return false;
    } else {
      alert(JSON.stringify(this.registrationForm.value));
    }
  }*/

  getCrimes() {
    this.isSubmitted = true;
    if (!this.registrationForm.valid) {
      return false;
    } else {
      this.crimeList = this.crimesService.getCrimesFromServer(this.registrationForm.value.forceName);
      console.log(this.registrationForm.value.forceName);
    }
  }

  ngOnInit(): void { }
}
