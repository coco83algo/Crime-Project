import { Component, Input, OnInit } from '@angular/core';
import { Force } from '../../Interfaces/Force';

@Component({
  selector: 'cpa-force',
  template: `
    <span>
      {{ force.id }} - {{ force.name | titlecase }}
      <cpa-force-details></cpa-force-details>
    </span>
  `,
  styles: [],
})

export class ForceComponent implements OnInit {
  @Input() force!: Force;

  constructor() {}

  ngOnInit(): void {}
}
