import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../todo/model/todo.model';

@Pipe({
  name: 'filterPipe',
  standalone: true,
})
export class FilterPipe implements PipeTransform {
  transform(todos: Todo[], filtro: string): Todo[] {
    switch (filtro) {
      case 'Completados':
        return todos.filter((todo) => todo.completado);
      case 'Activos':
        return todos.filter((todo) => !todo.completado);
    }
    return todos;
  }
}
