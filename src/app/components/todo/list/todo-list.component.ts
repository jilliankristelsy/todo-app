import {Component, OnInit} from '@angular/core';
import {Todo, TodoApi, TodoStatus} from '@src/app/models/todo.model';
import {TodoApiService} from '@src/app/apis/todo/todo.api.service';
import * as moment from 'moment';
import {finalize} from 'rxjs/operators';

@Component({
    selector: 'app-todo-list',
    templateUrl: 'todo-list.component.html',
    styleUrls: ['todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

    public list: Todo[];
    public isLoading: boolean;

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
        this.isLoading = true;
        this.todoApiService.getList()
            .pipe(
                finalize(() => this.isLoading = false)
            )
            .subscribe((list) => { // INFO: no error action
                list.forEach((item) => {
                    this.list.push({
                        ...item,
                        loading: false,
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

    /**
     * calls the API to complete the todo item
     */
    finishTodoItem(todoId: string) {
        const todoItem = this.list.find((item) => item.id === todoId);
        todoItem.loading = true;
        this.todoApiService.finishItem(todoId)
            .pipe(
                finalize(() => todoItem.loading = false)
            )
            .subscribe((response) => { // INFO: no error action
                if (response.status === 'success') {
                    todoItem.isComplete = true;
                    todoItem.status = TodoStatus.COMPLETE;
                }
            });
    }

    /**
     * returns a sorted list of only the OVERDUE items
     */
    get overdueList(): Todo[] {
        return this.sorted(this.list
            .filter((item) => item.status === TodoStatus.OVERDUE));
    }

    /**
     * returns a sorted list of only the COMPLETE items
     */
    get completedList(): Todo[] {
        return this.sorted(this.list
            .filter((item) => item.status === TodoStatus.COMPLETE));
    }

    /**
     * returns a sorted list of only the ONTRACK items
     */
    get ontrackList(): Todo[] {
        return this.sorted(this.list
            .filter((item) => item.status === TodoStatus.ONTRACK));
    }

    /**
     * sorts a Todo[] by due date, earliest first and null dates at the end
     */
    sorted(templist: Todo[]): Todo[] {
        return templist.sort((itemA, itemB) => {
            if (!itemA.dueDate) {
                return 1;
            }
            if (!itemB.dueDate) {
                return -1;
            }
            return moment(itemA.dueDate).isBefore(itemB.dueDate) ? -1 : 0;
        });
    }
}
