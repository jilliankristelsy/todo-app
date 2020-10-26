import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {RequestHeaderInterceptor} from '@src/app/interceptors/request-header.interceptor';
import {TodoListComponent} from '@src/app/components/todo/list/todo-list.component';
import {TodoRowComponent} from '@src/app/components/todo/row/todo-row.component';
import {TodoApiService} from '@src/app/apis/todo/todo.api.service';

@NgModule({
    declarations: [
        AppComponent,
        TodoListComponent,
        TodoRowComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule
    ],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: RequestHeaderInterceptor, multi: true},
        TodoApiService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
