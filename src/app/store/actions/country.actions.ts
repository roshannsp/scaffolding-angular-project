import { createAction, props } from '@ngrx/store';
import { Country } from '../../interfaces/country.interface';

export const getCountry = createAction('[Country] get country');
export const getCountrySuccess = createAction(
  '[Country] get country success',
  props<{ countries: Country[] }>()
);
export const getCountryFailed = createAction(
  '[Country] get country failed',
  props<{ error: Error }>()
);
export const queryCountry = createAction(
  '[Country] query country',
  props<{ query: string }>()
);
