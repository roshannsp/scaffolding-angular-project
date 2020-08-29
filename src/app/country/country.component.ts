import { Component, OnInit } from '@angular/core';
import { Country } from '../interfaces/country.interface';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { State } from '../store/reducers/country.reducer';
import { getCountry, queryCountry } from '../store/actions/country.actions';
import * as fromCountry from '../store/selectors/country.selectors';
@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
})
export class CountryComponent implements OnInit {
  countries$: Observable<Country[]>;

  constructor(private store: Store<{ country: State }>) {
    this.countries$ = store.select(fromCountry.selectQueriedCountries);
  }

  ngOnInit(): void {
    this.store.dispatch(getCountry());
  }

  query(query: string) {
    this.store.dispatch(queryCountry({ query }));
  }
}
