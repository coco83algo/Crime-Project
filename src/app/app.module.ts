import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForceListComponent } from './Components/force-list-component/force-list.component';
import { ForceComponent } from './Components/force-component/force.component';
import { ForceDetailsComponent } from './Components/force-details-component/force-details.component';
import { ForcesListService } from './Services/forces-list-service/forces-list.service';
import { HttpClientModule } from '@angular/common/http';
import { ForceOfficersComponent } from './Components/force-officers-component/force-officers.component';
import { CrimeComponent } from './Components/crime-component/crime.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CrimeDetailsComponent } from './Components/crime-details-component/crime-details.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MapComponent } from './Components/map-component/map.component';
import { AccueilComponent } from './Components/accueil/accueil.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgxChartsModule }from '@swimlane/ngx-charts';
import { ChartComponent } from './chart.component'

@NgModule({
  declarations: [
    AppComponent,
    ForceListComponent,
    ForceComponent,
    ForceDetailsComponent,
    ForceOfficersComponent,
    CrimeComponent,
    CrimeDetailsComponent,
    MapComponent,
    AccueilComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    LeafletModule,
    BrowserAnimationsModule,
    MatGridListModule,
    BrowserAnimationsModule,
    NgxChartsModule
  ],
  providers: [
    ForcesListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
