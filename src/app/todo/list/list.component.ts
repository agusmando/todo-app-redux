import { Component, OnInit } from '@angular/core';
import { ItemComponent } from '../item/item.component';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { Todo } from '../model/todo.model';
import { FilterPipe } from '../../filter/filter.pipe';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ItemComponent, FilterPipe],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent implements OnInit {
  public todos: Todo[] = [];
  public filter: string = '';
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.subscribe((state) => {
      this.todos = state.todos;
      this.filter = state.filtro;
    });
  }
}
