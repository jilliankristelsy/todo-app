import {Observable, of} from 'rxjs';
import {default as todoList} from '@src/mocks/todo-list.json';
import {default as todoUpdate} from '@src/mocks/todo-update.json';

export class TodoApiServiceMock {
    getList(): Observable<any> {
        return of(todoList);
    }

    finishItem(itemId: string): Observable<any> {
        return of(todoUpdate);
    }
}
