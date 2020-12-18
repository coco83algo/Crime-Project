import { Component, OnInit, Input } from '@angular/core';
import { Crime } from './Interfaces/Crime';

@Component({
  selector: 'cpa-chart',
  template: `
  <div *ngIf="crimeListPerMonth && crimeListPerMonth.length != 0">
    <ngx-charts-bar-vertical class="chart"
      [view]="[1000,400]"
      [results]="data"
      [xAxisLabel]="'Months'"
      [legendTitle]="'Crimes per month'"
      [yAxisLabel]="'Crimes'"
      [legend]="true"
      [showXAxisLabel]="true"
      [showYAxisLabel]="true"
      [xAxis]="true"
      [yAxis]="true"
      [gradient]="true"
      (select)="onSelect($event)">
    </ngx-charts-bar-vertical>
  </div>
  <button class="btn btn-danger btn-lg btn-block" (click)="startLiveData()">Show crimes</button>
  `,
  styleUrls: ['chart.css']
})
export class ChartComponent implements OnInit {
  @Input() crimeListPerMonth!: Crime[][];
  count;
  months = ["January", "February", "March", "April", "May", "June","August", "September", "October", "November"];

  //Initiation of the dataset
  data = [
    { name: "January", value: 0 },
    { name: "February", value: 0 },
    { name: "March", value: 0 },
    { name: "April", value: 0 },
    { name: "May", value: 0 },
    { name: "June", value: 0 },
    { name: "July", value: 0 },
    { name: "August", value: 0 },
    { name: "September", value: 0 },
    { name: "October", value: 0 },
    { name: "November", value: 0 }
  ];

  constructor() {}

  onSelect(event) {
    console.log(event);
  }

  startLiveData() {
    this.count = 0;
    this.months.forEach(month => {
      this.data.push({name: month, value: this.crimeListPerMonth[this.count].length});
      this.data = [...this.data];
      this.count++;
    });
  }

  ngOnInit(): void {}
}
