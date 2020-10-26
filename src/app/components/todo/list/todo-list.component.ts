import {Component, OnInit} from '@angular/core';
import {Todo, TodoApi, TodoStatus} from '@src/app/models/todo.model';
import {TodoApiService} from '@src/app/apis/todo/todo.api.service';
import * as moment from 'moment';

@Component({
    selector: 'app-todo-list',
    templateUrl: 'todo-list.component.html',
    styleUrls: ['todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

    public list: Todo[];

    constructor(private todoApiService: TodoApiService) {
    }

    ngOnInit() {
        this.resetList();
        this.initializeList();

    }


     resetList() {
        this.list = [];
     }

    /**
     * Initialize todo list
     */
    initializeList() {
        this.todoApiService.getList()
            .subscribe((list) => {
                list.forEach((item) => {
                    this.list.push({
                        ...item,
                        status: this.getStatusOfItem(item)
                    });
                });
            });
    }

    /**
     * Return status of item by reading a date
     */
    getStatusOfItem(item: TodoApi): TodoStatus {
        if (item.isComplete) {
            return TodoStatus.COMPLETE;
        } else if (item.dueDate && this.isDateInPast(item.dueDate)) {
            return TodoStatus.OVERDUE;
        }
        return TodoStatus.ONTRACK;
    }

    /**
     * Helper method
     * TODO: Move to a shared utils class
     */
    isDateInPast(dateString: string): boolean {
        return moment(dateString).isBefore(moment());
    }
}
