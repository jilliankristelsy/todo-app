import {Component, Input} from '@angular/core';
import {Todo} from '@src/app/models/todo.model';

@Component({
    selector: 'app-todo-row',
    templateUrl: 'todo-row.component.html'
})
export class TodoRowComponent {

    @Input() data: Todo;
}
