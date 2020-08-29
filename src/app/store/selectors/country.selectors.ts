import { createSelector } from '@ngrx/store';
import { State } from '../reducers';
import { State as CountryState } from '../reducers/country.reducer';

export const selectCountry = (state: State) => state.country;

export const selectQueriedCountries = createSelector(
  selectCountry,
  (state: CountryState) => state.queriedCountries
);

export const selectCountryLoading = createSelector(
  selectCountry,
  (state: CountryState) => state.loading
);

export const selectCountryError = createSelector(
  selectCountry,
  (state: CountryState) => state.error
);
