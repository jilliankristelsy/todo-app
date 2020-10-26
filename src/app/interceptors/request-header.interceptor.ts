import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {X_API_KEY} from '@src/environments/environment';

@Injectable()
export class RequestHeaderInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // Add necessary headers to all requests
        const reqHeaders = req.headers;
        reqHeaders.append('x-api-key', X_API_KEY);
        reqHeaders.append('Content-Type', 'application/json');

        const modifiedRequest = req.clone({
            headers: reqHeaders
        });
        return next.handle(modifiedRequest);
    }
}
