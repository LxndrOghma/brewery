import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Brewery } from './brewery';
import { BREWERIES } from './mock-breweries';

@Injectable({
  providedIn: 'root'
})
export class BreweryService {

  constructor() { }

  getBreweries(): Observable<Brewery[]> {
    const breweries = of(BREWERIES);
    return breweries;
  }
}
