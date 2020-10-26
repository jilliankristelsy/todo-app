import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TODO} from '@src/environments/environment';
import {Todo} from '@src/app/models/todo.model';

@Injectable()
export class TodoApiService {

    constructor(private http: HttpClient) {}

    getList(): Observable<Todo[]> {
        return this.http.get<Todo[]>(TODO.getList);
    }

    finishItem(itemId: string): Observable<any> {
        return this.http.patch(TODO.patchItem.replace(':itemId', itemId), {
            isComplete: true
        });
    }
}
