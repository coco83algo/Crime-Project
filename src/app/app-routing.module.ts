import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ForceListComponent } from './Components/force-list-component/force-list.component';
import { CrimeComponent } from './Components/crime-component/crime.component';
import { MapComponent } from './Components/map-component/map.component';
import { AccueilComponent } from './Components/accueil-component/accueil.component';
import { ForceOfficersComponent } from './Components/force-officers-component/force-officers.component';
import { ForceDetailsComponent } from './Components/force-details-component/force-details.component';
import { CrimeDetailsComponent } from './Components/crime-details-component/crime-details.component';

const routes: Routes = [
  {path: '', component: AccueilComponent},
  {path: 'accueil', component: AccueilComponent},
  {path: 'forces', component: ForceListComponent},
  {path: 'crimes', component: CrimeComponent},
  {path: 'crimes/:forceName', component: CrimeDetailsComponent},
  {path: 'map', component: MapComponent},
  {path: 'forces/:currentForce', component: ForceDetailsComponent},
  {path: 'forces/:currentForce/officers', component: ForceOfficersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
