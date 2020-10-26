import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {X_API_KEY} from '@src/environments/environment';

@Injectable()
export class RequestHeaderInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // Add necessary headers to all requests
        const modifiedRequest = req.clone({
            headers: req.headers
                .set('x-api-key', X_API_KEY)
                .set('Content-Type', 'application/json')
        });
        return next.handle(modifiedRequest);
    }
}
