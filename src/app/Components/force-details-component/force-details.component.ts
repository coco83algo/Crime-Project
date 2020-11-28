import { Component, Input, OnInit } from '@angular/core';
import { Force } from '../../Interfaces/Force';

@Component({
  selector: 'cpa-force-details',
  template: `
    <p>get details</p>
    <!-- Pour l'instant je ne l'ai pas mis parce que ça ne fonctionne pas
    Mais ça sera la forme finale pour les détails d'une force affichée
    <div>Unique force identifier : {{force.id}} </div>
    <div>Forn name : {{force.name}} </div>
    <div>Description : {{force.description}} </div>
    <div>Force website URL : {{force.url}} </div>
    <div>Force telephone number : {{force.telephone}} </div> -->
  `,
  styles: [],
})

export class ForceDetailsComponent implements OnInit {
  @Input() force!: Force;
  constructor() {}

  ngOnInit(): void {}
}
