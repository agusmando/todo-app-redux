import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../model/todo.model';
import { FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { deleteAction, editingAction, toggleTodoAction } from '../todo.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css',
})
export class ItemComponent implements OnInit {
  @Input() todo: Todo = new Todo('');
  @ViewChild('txtInputFisico') txtInputFisico!: ElementRef;
  chkField!: FormControl;
  txtInput!: FormControl;
  editing: boolean = false;
  completado: boolean = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.chkField = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);
    this.chkField.valueChanges.subscribe((value) => {
      const action = toggleTodoAction({ id: this.todo.id });
      this.store.dispatch(action);
    });
  }

  checkItem() {
    this.chkField.setValue(this.todo.completado);
  }

  editar() {
    if (!this.completado) {
      this.editing = true;
      setTimeout(() => {
        this.txtInputFisico.nativeElement.select();
      }, 100);
    }
  }

  terminarEdicion() {
    const action = editingAction({
      payload: { id: this.todo.id, text: this.txtInput.value },
    });
    this.store.dispatch(action);
    this.editing = false;
  }

  deleteTodo() {
    const action = deleteAction({ id: this.todo.id });
    this.store.dispatch(action);
  }

  agregarTodo() {
    // const action = addAction({todo: })
  }
}
