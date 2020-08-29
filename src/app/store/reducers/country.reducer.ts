import { createReducer, on } from '@ngrx/store';
import {
  getCountry,
  getCountrySuccess,
  getCountryFailed,
} from '../actions/country.actions';
import { Country } from '../../interfaces/country.interface';

export interface State {
  countries: Country[];
  loading: boolean;
  error: Error;
}

export const initialState = {
  countries: [],
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
    loading: false,
  })),
  on(getCountryFailed, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
