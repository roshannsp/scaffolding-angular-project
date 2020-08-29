import { Component, OnInit } from '@angular/core';
import { Country } from '../interfaces/country.interface';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { State } from '../store/reducers/country.reducer';
import { getCountry, queryCountry } from '../store/actions/country.actions';
import * as fromCountry from '../store/selectors/country.selectors';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
})
export class CountryComponent implements OnInit {
  countries$: Observable<Country[]>;
  loading$: Observable<boolean>;
  error$: Observable<HttpErrorResponse>;

  constructor(private store: Store<{ country: State }>) {
    this.countries$ = store.select(fromCountry.selectQueriedCountries);
    this.loading$ = store.select(fromCountry.selectCountryLoading);
    this.error$ = store.select(fromCountry.selectCountryError);
  }

  ngOnInit(): void {
    this.store.dispatch(getCountry());
  }

  query(query: string) {
    this.store.dispatch(queryCountry({ query }));
  }
}
