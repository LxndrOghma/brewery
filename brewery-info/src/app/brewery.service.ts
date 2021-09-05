import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Brewery } from './brewery';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BreweryService {

  private breweryUrl = 'https://api.openbrewerydb.org/breweries';

  constructor(
    private http: HttpClient,
  ) { }

  getBreweries(): Observable<Brewery[]> {
    return this.http.get<Brewery[]>(this.breweryUrl)
      .pipe(
        catchError(this.handleError<Brewery[]>('getBreweries', []))
      )
  }

  getBrewery(id: number): Observable<Brewery> {
    const url = `${this.breweryUrl}/${id}`;
    return this.http.get<Brewery>(url)
      .pipe(
      catchError(this.handleError<Brewery>(`getHero id=${id}`))
    )
  }

  searchBreweries(term: string): Observable<Brewery[]> {
    if (!term.trim()) {
      return this.http.get<Brewery[]>(this.breweryUrl);
    }
    return this.http.get<Brewery[]>(`${this.breweryUrl}/search?query=${term}`)
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of (result as T)
    }
  }
}
