import { Component, Input, OnInit } from '@angular/core';
import { Force } from '../../Interfaces/Force';

@Component({
  selector: 'cpa-force',
  template: `
    <h2>
      {{ force.id | titlecase }}
      <cpa-force-details></cpa-force-details>
    </h2>
  `,
  styles: [],
})

export class ForceComponent implements OnInit {
  @Input() force!: Force;

  constructor() {}

  ngOnInit(): void {}
}
