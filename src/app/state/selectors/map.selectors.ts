import { createFeatureSelector, createSelector } from '@ngrx/store';
import {State} from "../reducers";

export const selectMap = (state: State) => state.map.map;

export const selectMapStatistics = (state: State) => state.map.map.statistics;

export const selectMapLoading = (state: State) => state.map.map.loading;
