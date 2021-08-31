import { Component, OnInit } from '@angular/core';
import { Brewery } from '../brewery';
import { BreweryService } from '../brewery.service';
import { BREWERIES } from '../mock-breweries';

@Component({
  selector: 'app-breweries',
  templateUrl: './breweries.component.html',
  styleUrls: ['./breweries.component.scss']
})
export class BreweriesComponent implements OnInit {

  breweries: Brewery[] = [];

  constructor(private breweryService: BreweryService) { }

  ngOnInit(): void {
    this.getBreweries();
  }

  getBreweries(): void {
    this.breweryService.getBreweries()
      .subscribe(breweries => this.breweries = breweries);
  }

}
