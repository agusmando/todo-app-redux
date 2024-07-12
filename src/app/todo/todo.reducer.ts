import { Action, createReducer, on } from '@ngrx/store';
import { Todo } from './model/todo.model';
import * as fromTodo from './todo.actions';
const estadoInicial: Todo[] = [
  new Todo('Vencer a Thanos'),
  new Todo('Salvar el mundo'),
];

export const _todoReducer = createReducer(
  estadoInicial,
  on(fromTodo.agregarTodoAction, (state, { texto }) => {
    const todo = new Todo(texto);
    return [...state, todo];
  }),
  on(fromTodo.toggleTodoAction, (state, { id }) => {
    const newState = state.map((todo) => {
      console.log(todo.id + ' = ' + id + '? ' + (todo.id == id));
      if (todo.id == id) {
        return {
          ...todo,
          completado: !todo.completado,
        };
      }
      return todo;
    });
    return newState;
  }),
  on(fromTodo.editingAction, (state, { payload: { id, text } }) => {
    const newState = state.map((todo) => {
      if (todo.id == id) {
        return {
          ...todo,
          texto: text,
        };
      }
      return todo;
    });
    return newState;
  }),
  on(fromTodo.deleteAction, (state, { id }) => {
    console.log(state);

    const newState = state.filter((todo) => {
      return todo.id != id;
    });
    return newState;
  }),
  on(fromTodo.toggleAllAction, (state, { completado }) => {
    const newState = state.map((singleState) => {
      return { ...singleState, completado: completado };
    });
    return newState;
  }),
  on(fromTodo.deleteCompletedAction, (state) => {
    const newState = state.filter((todo) => {
      return !todo.completado;
    });

    return newState;
  })
);

export function todoReducer(state: Todo[] | undefined, action: Action) {
  return _todoReducer(state, action);
}
