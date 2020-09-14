import { Component, OnInit, Input } from '@angular/core';
import { Country } from 'src/app/interfaces/country.interface';

@Component({
  selector: 'app-country-card-list',
  templateUrl: './country-card-list.component.html',
  styleUrls: ['./country-card-list.component.scss'],
})
export class CountryCardListComponent implements OnInit {
  @Input() countries: Country[];

  constructor() {}

  ngOnInit(): void {}
}
