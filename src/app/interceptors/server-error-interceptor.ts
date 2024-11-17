import { Injectable } from "@angular/core";
import { HttpEvent, HttpRequest, HttpHandler, HttpInterceptor, HttpErrorResponse, HttpResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { retry, catchError, map, finalize } from "rxjs/operators";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";

import { ProblemDetails } from "../shared/models/problem-details";

@Injectable()
export class ServerErrorInterceptor implements HttpInterceptor {

    constructor(
        private spinner: NgxSpinnerService, 
        private toastr: ToastrService
    ) {}

    intercept(
        request: HttpRequest<any>, 
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        this.spinner.show();
        this.toastr.info('Request initiated');

        return next.handle(request).pipe(
            retry(1),
            map((event: HttpEvent<any>) => {
                if(event instanceof HttpResponse) {
                    this.toastr.success('Request sucessful');
                }
                return event;
            }),
            catchError((error: HttpErrorResponse) => {
                this.handleError(error);
                console.log(error);
                return throwError(error);
            }),
            finalize(() => {
                setTimeout(() => {
                    this.spinner.hide();
                }, 1000);
            })
        );
    }

    private handleError(error: HttpErrorResponse) {
        if(error.error && typeof error.error === 'string') {
            try {
                const parsedError = JSON.parse(error.error);
                
                if (typeof parsedError === 'object') {
                    const problemDetails = new ProblemDetails(parsedError);
                    this.toastr.error(`Request failed: ${problemDetails.title}`);
                }
            } catch (parseError) {
                this.toastr.error(`Error parsing JSON: ${parseError}`);
            }
            
        } else {
            this.toastr.error(`Request failed: ${error.message || 'An unexpected error occurred.'}`);
        }
    }
}