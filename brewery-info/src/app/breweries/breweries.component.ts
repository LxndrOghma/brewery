import { Component, OnInit } from '@angular/core';
import { Brewery } from '../brewery';
import { BREWERIES } from '../mock-breweries';

@Component({
  selector: 'app-breweries',
  templateUrl: './breweries.component.html',
  styleUrls: ['./breweries.component.scss']
})
export class BreweriesComponent implements OnInit {

  breweries = BREWERIES;

  selectedBrewery?: Brewery;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(brewery: Brewery): void {
    this.selectedBrewery = brewery;
  }

}
