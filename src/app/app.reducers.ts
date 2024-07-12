import { ActionReducerMap } from '@ngrx/store';
import { Todo } from './todo/model/todo.model';

import * as fromTodo from './todo/todo.reducer';
import * as fromFilter from './filter/filter.reducer';

export interface AppState {
  todos: Todo[];
  filtro: string;
}

export const reducers: ActionReducerMap<AppState> = {
  todos: fromTodo.todoReducer,
  filtro: fromFilter.filterReducer,
};
