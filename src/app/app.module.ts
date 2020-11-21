import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForceListComponent } from './force-list.component';
import { ForceComponent } from './force.component';
import { ForceDetailsComponent } from './force-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ForceListComponent,
    ForceComponent,
    ForceDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
