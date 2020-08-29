import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import {
  getCountry,
  getCountrySuccess,
  getCountryFailed,
} from '../actions/country.actions';
import { CountryService } from '../../services/country/country.service';
import { Country } from '../../interfaces/country.interface';

@Injectable()
export class CountryEffects {
  getCountry$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCountry),
      mergeMap(() =>
        this.countryService.get().pipe(
          map((countries: Country[]) => getCountrySuccess({ countries })),
          catchError((error: Error) => of(getCountryFailed({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private countryService: CountryService
  ) {}
}
