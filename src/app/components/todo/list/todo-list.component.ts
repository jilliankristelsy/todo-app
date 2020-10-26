import {Component} from '@angular/core';
import {Todo} from '@src/app/models/todo.model';

@Component({
    selector: 'app-todo-list',
    template: 'todo-list.component.html'
})
export class TodoListComponent {

    public list: Todo[];

    constructor() {
    }
}
