import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { agregarTodoAction } from '../todo.actions';

@Component({
  selector: 'app-todo-add',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './todo-add.component.html',
  styleUrl: './todo-add.component.css',
})
export class TodoAddComponent {
  txtInput: FormControl = new FormControl('', Validators.required);

  constructor(private store: Store<AppState>) {}

  agregarTodo() {
    if (this.txtInput.invalid) {
      return;
    }
    const action = agregarTodoAction({ texto: this.txtInput.value });
    this.store.dispatch(action);
    this.txtInput.setValue('');
  }
}
