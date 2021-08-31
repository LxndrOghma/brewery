import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BreweriesComponent } from './breweries/breweries.component';
import { BreweryDetailComponent } from './brewery-detail/brewery-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/breweries', pathMatch: 'full' },
  { path: 'detail/:id', component: BreweryDetailComponent},
  { path: 'breweries', component: BreweriesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
