import { createAction, props } from '@ngrx/store';

export const AGREGAR_TODO = '[TODO] Agregar todo';
export const TOGGLE_TODO = '[TODO] Toggle todo';
export const EDITING_TODO = '[TODO] Editing todo';
export const DELETE_TODO = '[TODO] Deleting todo';
export const TOGGLE_ALL = '[TODO] Toggle All';
export const BORRAR_COMPLETADOS = '[TODO] Borrar todos completados';

export const agregarTodoAction = createAction(
  AGREGAR_TODO,
  props<{ texto: string }>()
);

export const toggleTodoAction = createAction(
  TOGGLE_TODO,
  props<{ id: number }>()
);

export const editingAction = createAction(
  EDITING_TODO,
  props<{ payload: { id: number; text: string } }>()
);

export const toggleAllAction = createAction(
  TOGGLE_ALL,
  props<{ completado: boolean }>()
);

export const deleteCompletedAction = createAction(BORRAR_COMPLETADOS);

export const deleteAction = createAction(DELETE_TODO, props<{ id: number }>());
