import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ForceListComponent } from './Components/force-list-component/force-list.component';
import { CrimeComponent } from './crime.component';

const routes: Routes = [
  {path: '', component: ForceListComponent},
  {path: 'forces', component: ForceListComponent},
  {path: 'crimes', component: CrimeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
