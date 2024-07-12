import { Component, OnInit } from '@angular/core';
import { AppState } from '../../app.reducers';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { setFiltroAction } from '../../filter/filter.actions';
import { Todo } from '../model/todo.model';
import { deleteCompletedAction } from '../todo.actions';
// import { filterAction } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-footer.component.html',
  styleUrl: './todo-footer.component.css',
})
export class TodoFooterComponent implements OnInit {
  filtrosValidos = ['Todos', 'Activos', 'Completados'];
  filtroActual!: string;
  pendientes!: number;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.subscribe((state) => {
      this.filtroActual = state.filtro;
      this.contarPendientes(state.todos);
    });
  }

  cambiarFiltro(filtro: string) {
    const filterStateAction = setFiltroAction({ filtro });
    this.store.dispatch(filterStateAction);
    this.filtroActual = filtro;
  }

  contarPendientes(todos: Todo[]) {
    this.pendientes = todos.filter((todo) => !todo.completado).length;
  }

  borrarCompletados() {
    const actions = deleteCompletedAction();
    this.store.dispatch(actions);
  }
}
