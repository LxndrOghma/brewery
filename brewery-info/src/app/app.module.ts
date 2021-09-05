import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { BreweriesComponent } from './breweries/breweries.component';
import { BreweryDetailComponent } from './brewery-detail/brewery-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    BreweriesComponent,
    BreweryDetailComponent,
    MapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
