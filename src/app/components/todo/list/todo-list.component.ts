import {Component, OnInit} from '@angular/core';
import {Todo} from '@src/app/models/todo.model';
import {TodoApiService} from '@src/app/apis/todo/todo.api.service';

@Component({
    selector: 'app-todo-list',
    templateUrl: 'todo-list.component.html'
})
export class TodoListComponent implements OnInit {

    public list: Todo[];

    constructor(private todoApiService: TodoApiService) {
    }

    ngOnInit() {
        this.todoApiService.getList()
            .subscribe((list) => this.list = list);

    }
}
