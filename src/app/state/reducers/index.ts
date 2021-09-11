import {ActionReducer, ActionReducerMap, createFeatureSelector, createSelector, MetaReducer} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import {mapReducer, MapState} from "./map.reducer";

export interface State {
  map: MapState
}

export const reducers: ActionReducerMap<State> = {
  map: mapReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
