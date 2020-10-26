import {Component, Input} from '@angular/core';
import {Todo} from '@src/app/models/todo.model';
import * as moment from 'moment';

@Component({
    selector: 'app-todo-row',
    templateUrl: 'todo-row.component.html',
    styleUrls: ['todo-row.component.scss']
})
export class TodoRowComponent {

    @Input() data: Todo;

    constructor() {}

    getFormattedDate(dateString: string): string {
        return moment(dateString).format('MM/DD/YYYY');
    }
}
