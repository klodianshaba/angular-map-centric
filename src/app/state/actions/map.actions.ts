import { createAction, props } from '@ngrx/store';
import {MapInterface} from "../../shared/models/map.model";

export const updateMap = createAction(
  '[updateMap] Update Map',
  props<{ map: MapInterface }>()
);

export const updateLoading = createAction(
  '[updateMapLoading] Update Map Loading',
  props<{ loading: boolean }>()
);

export const mapsMapsSuccess = createAction(
  '[Map] Maps Maps Success',
  props<{ data: any }>()
);

export const mapsMapsFailure = createAction(
  '[Map] Maps Maps Failure',
  props<{ error: any }>()
);
