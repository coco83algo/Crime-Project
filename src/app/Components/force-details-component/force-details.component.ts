import { Component, Input, OnInit } from '@angular/core';
import { Force } from '../../Interfaces/Force';
import { ForcesListService } from '../../Services/forces-list-service/forces-list.service';

@Component({
  selector: 'cpa-force-details',
  template: `
    <p>Get details</p>
    <!--<button (click)="getForceDetails(force)">Details</button>
    <button (click)="getForceOfficers(force)">Officers</button>
     Pour l'instant je ne l'ai pas mis parce que ça ne fonctionne pas
    Mais ça sera la forme finale pour les détails d'une force affichée
    <span>Unique force identifier : {{force.id}} </span>
    <span>Forn name : {{force.name}} </span>
    <span>Description : {{force.description}} </span>
    <span>Force website URL : {{force.url}} </span>
    <span>Force telephone number : {{force.telephone}} </span>-->
  `,
  styles: [],
})

export class ForceDetailsComponent implements OnInit {
  @Input() force!: Force;
  @Input() displayDetails!: boolean;

  constructor(private forceslistService: ForcesListService) {}

  ngOnInit(): void {}
}
