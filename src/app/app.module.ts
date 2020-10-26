import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {RequestHeaderInterceptor} from '@src/app/interceptors/request-header.interceptor';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: RequestHeaderInterceptor, multi: true}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
