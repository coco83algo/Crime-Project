import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cpa-navbar',
  template: `
    <nav>
      <ul>
        <li><a routerLink="/accueil" routerLinkActive="active">Accueil</a></li>
        <li><a routerLink="/forces" routerLinkActive="active">Forces</a></li>
        <li><a routerLink="/crimes" routerLinkActive="active">Crimes</a></li>
        <li><a routerLink="/map" routerLinkActive="active">Map</a></li>
      </ul>
    </nav>
  `,
  styleUrls: ['./navbar.css']

})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
