import { Component, Input, OnInit } from '@angular/core';
// tslint:disable-next-line: quotemark
import { Force } from "./Force";

@Component({
  selector: 'cpa-force',
  template: `
    <span>
      {{ force.id }} - {{ force.name | titlecase }}
    </span>
  `,
  styles: [
  ]
})
export class ForceComponent implements OnInit {
  @Input() force!: Force;

  constructor() { }

  ngOnInit(): void {
  }

}
