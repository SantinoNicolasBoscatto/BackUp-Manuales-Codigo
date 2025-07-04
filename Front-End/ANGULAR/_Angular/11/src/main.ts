import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

import {provideRouter, withComponentInputBinding, withRouterConfig} from '@angular/router'
import { routes } from './app/app.routes';
bootstrapApplication(AppComponent, {
    providers: [provideRouter(routes, withComponentInputBinding(), 
        withRouterConfig({
            paramsInheritanceStrategy: 'always' // esto permitira a rutas hijas acceder a los parametros de rutas padres
        }))]
}).catch((err) => console.error(err));
