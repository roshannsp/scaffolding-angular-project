import { createAction, props } from '@ngrx/store';
import { Country } from '../../interfaces/country.interface';
import { HttpErrorResponse } from '@angular/common/http';

export const getCountry = createAction('[Country] get country');
export const getCountrySuccess = createAction(
  '[Country] get country success',
  props<{ countries: Country[] }>()
);
export const getCountryFailed = createAction(
  '[Country] get country failed',
  props<{ error: HttpErrorResponse }>()
);
export const queryCountry = createAction(
  '[Country] query country',
  props<{ query: string }>()
);
