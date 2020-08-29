import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromCountry from './country.reducer';

export interface State {
  country: fromCountry.State;
}

export const reducers: ActionReducerMap<State> = {
  country: fromCountry.reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
