import { Component } from '@angular/core';

@Component({
  selector: 'cpa-root',
  template: `
   <!-- <div class="content">
      <h1>Welcome to {{ title }}!</h1>
      <cpa-force-list></cpa-force-list>
    </div>

    <h1>Angular Router App</h1>-->
    <nav>
      <ul>
        <li><a routerLink="/accueil" routerLinkActive="active">Accueil</a></li>
        <li><a routerLink="/forces" routerLinkActive="active">Forces</a></li>
        <li><a routerLink="/crimes" routerLinkActive="active">Crimes</a></li>
        <li><a routerLink="/map" routerLinkActive="active">Map</a></li>
      </ul>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent {
  title = 'Crime-Project';
}
