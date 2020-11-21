import { Component, OnInit } from '@angular/core';
import { Force } from './Force';

@Component({
  selector: 'cpa-force-list',
  template: `
    <p>
      This is the list of forces in this area :
    </p>
    <ul>
      <li *ngFor="let currentForce of forcelist">
        <cpa-force [force]="currentForce">
        </cpa-force>
      </li>
    </ul>
  `,
  styles: [
  ]
})
export class ForceListComponent implements OnInit {

constructor() { }

  forcelist: Force[] = [
    {
    id: 1,
    name: 'London Police'
    },
    {
      id: 2,
      name: 'Manchester Police'
    },
    {
      id: 3,
      name: 'Dublin Police'
    }
  ];
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
