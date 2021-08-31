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

  getBrewery(id: number): Observable<Brewery> {
    const brewery = BREWERIES.find(brewery => brewery.id === id)!;
    return of(brewery);
  }
}
