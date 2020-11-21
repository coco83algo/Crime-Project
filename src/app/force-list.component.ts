import { Component, OnInit } from '@angular/core';
import { Force } from './Force';

@Component({
  selector: 'cpa-force-list',
  template: `
    <p>This is the list of forces in this area :</p>
    <ul>
      <li *ngFor="let currentForce of forcelist">
        <cpa-force [force]="currentForce"> </cpa-force>
      </li>
    </ul>
  `,
  styles: [],
})

export class ForceListComponent implements OnInit {
  constructor() {}

  forcelist: Force[] = [
    {
      id: 1,
      name: 'London Police',
      description: 'Old force of police who are serving the queen',
      url: 'coco@coco.com',
      telephone: '645',
    },
    {
      id: 2,
      name: 'Manchester Police',
      description: 'Force of police who are playing football',
      url: 'coco2@coco2.com',
      telephone: '876',
    },
    {
      id: 3,
      name: 'Dublin Police',
      description: 'Force of police who are always drunk',
      url: 'coco3@coco3.com',
      telephone: '123',
    },
  ];
  ngOnInit(): void {}
}
