import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { HttpEventType, HttpHandlerFn, HttpInterceptorFn, HttpRequest, provideHttpClient, withInterceptors } from '@angular/common/http';
import { tap } from 'rxjs';

function loggingInterceptor(request: HttpRequest<unknown>, next: HttpHandlerFn) {
    console.log('[Outgoing Request]')
    console.log(request)
    const req = request.clone({ // Con Clone puedo clonar y modificar una REQUEST existente
      setHeaders: {
        'Authorization': 'Bearer ${token}'
      }
    })
    return next(request)  // Esto devolvera un Observable que puedo manipular
    .pipe(tap({
        next: event => {
            if(event.type === HttpEventType.Response){
                console.log('Reponse: '+ event.body)
            }
        }
    }));
}

bootstrapApplication(AppComponent, {
    providers: [provideHttpClient(
        withInterceptors([loggingInterceptor])
    )]
}).catch((err) => console.error(err));
