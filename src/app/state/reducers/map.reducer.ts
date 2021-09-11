import { Action, createReducer, on } from '@ngrx/store';
import {MapModel} from "../../shared/models/map.model";
import {updateLoading, updateMap} from "../actions/map.actions";

export const mapFeatureKey = 'map';

export interface MapState {
  map: MapModel
}

export const initialState: MapState = {
  map: new MapModel()
};

export const mapReducer = createReducer(
  initialState,
  on(updateMap,(state, {map}) => ( {map: {...state.map, ...map}}) ),
  on(updateLoading, (state, {loading}) => ({map: {...state.map, ...{loading} }}))
);

