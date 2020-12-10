import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ForceListComponent } from './Components/force-list-component/force-list.component';
import { CrimeComponent } from './Components/crime-component/crime.component';
import { MapComponent } from './Components/map-component/map.component';

const routes: Routes = [
  {path: '', component: ForceListComponent},
  {path: 'forces', component: ForceListComponent},
  {path: 'crimes', component: CrimeComponent},
  {path: 'map', component: MapComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
