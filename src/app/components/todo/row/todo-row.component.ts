import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Todo} from '@src/app/models/todo.model';
import * as moment from 'moment';

@Component({
    selector: 'app-todo-row',
    templateUrl: 'todo-row.component.html',
    styleUrls: ['todo-row.component.scss']
})
export class TodoRowComponent {

    @Input() data: Todo;
    @Output() finishTodo = new EventEmitter();

    constructor() {}

    getFormattedDate(dateString: string): string {
        return moment(dateString).format('MM/DD/YYYY');
    }

    checkboxChanged() {
        // Not necessary to check value since completed ones will be disabled
        this.finishTodo.emit(this.data.id);
    }
}
