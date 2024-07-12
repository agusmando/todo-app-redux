import { Action, createReducer, on } from '@ngrx/store';
import * as fromFiltro from './filter.actions';

// const estadoInicial: fromFiltro.filtrosValidos = 'todos';

const _filterReducer = createReducer(
  'Todos',
  on(fromFiltro.setFiltroAction, (state, { filtro }) => {
    console.log(state, filtro);
    return filtro;
  })
);

export function filterReducer(
  state: string | undefined = 'todos',
  action: Action
) {
  return _filterReducer(state, action);
}
