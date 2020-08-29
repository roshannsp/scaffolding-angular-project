import { createReducer, on } from '@ngrx/store';
import {
  getCountry,
  getCountrySuccess,
  getCountryFailed,
  queryCountry,
} from '../actions/country.actions';
import { Country } from '../../interfaces/country.interface';

export interface State {
  countries: Country[];
  queriedCountries: Country[];
  loading: boolean;
  error: Error;
}

export const initialState = {
  countries: [],
  queriedCountries: [],
  loading: false,
  error: null,
};

export const reducer = createReducer(
  initialState,
  on(getCountry, (state) => ({
    ...state,
    loading: true,
  })),
  on(getCountrySuccess, (state, { countries }) => ({
    ...state,
    countries,
    queriedCountries: countries,
    loading: false,
  })),
  on(getCountryFailed, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(queryCountry, (state, { query }) => {
    const { countries } = state;
    const queriedCountries = countries.filter(({ name }) =>
      new RegExp(query, 'i').test(name)
    );
    return {
      ...state,
      queriedCountries,
    };
  })
);
