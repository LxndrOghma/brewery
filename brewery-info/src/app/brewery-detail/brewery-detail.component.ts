import { Component, OnInit, Input } from '@angular/core';
import { Brewery } from '../brewery';

@Component({
  selector: 'app-brewery-detail',
  templateUrl: './brewery-detail.component.html',
  styleUrls: ['./brewery-detail.component.scss']
})
export class BreweryDetailComponent implements OnInit {

  @Input() brewery?: Brewery;

  constructor() { }

  ngOnInit(): void {
  }

}
