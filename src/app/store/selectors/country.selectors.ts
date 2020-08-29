import { createSelector } from '@ngrx/store';
import { State } from '../reducers';
import { State as CountryState } from '../reducers/country.reducer';

export const selectCountry = (state: State) => state.country;

export const selectCountries = createSelector(
  selectCountry,
  (state: CountryState) => state.countries
);

export const selectCountryLoading = createSelector(
  selectCountry,
  (state: CountryState) => state.countries
);

export const selectCountryError = createSelector(
  selectCountry,
  (state: CountryState) => state.countries
);
