import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoAddComponent } from './todo/todo-add/todo-add.component';
import { ListComponent } from './todo/list/list.component';
import { TodoFooterComponent } from './todo/todo-footer/todo-footer.component';
import { FooterComponent } from './footer/footer.component';
import { AppState } from './app.reducers';
import { Store } from '@ngrx/store';
import { toggleAllAction } from './todo/todo.actions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TodoAddComponent,
    ListComponent,
    TodoFooterComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'todoapp';
  completado = false;

  constructor(private store: Store<AppState>) {}

  toggleAll() {
    this.completado = !this.completado;
    const action = toggleAllAction({ completado: this.completado });
    this.store.dispatch(action);
  }
}
