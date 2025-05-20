import { throwError } from 'rxjs'
import { HttpErrorResponse } from '@angular/common/http';

export class ErrorHandler {
  static handleError(error: HttpErrorResponse | any) {
    let errorMessage = '';
    if (error instanceof HttpErrorResponse) {
        errorMessage = `Erro ${error.status} ao acessar a URL ${error.url} - ${error.statusText}`;
    } else {
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
