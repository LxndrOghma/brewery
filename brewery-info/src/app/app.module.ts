import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BreweriesComponent } from './breweries/breweries.component';
import { BreweryDetailComponent } from './brewery-detail/brewery-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    BreweriesComponent,
    BreweryDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
