import { createAction, props } from '@ngrx/store';

export const SET_FILTRO = '[FILTER] set filtro';

export const setFiltroAction = createAction(
  SET_FILTRO,
  props<{ filtro: string }>()
);
