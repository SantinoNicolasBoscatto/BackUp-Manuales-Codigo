import { CanMatchFn, RedirectCommand, Router, Routes } from "@angular/router";
import { canLeaveEditPAge, NewTaskComponent } from "../tasks/new-task/new-task.component";
import { resolveUserTasks, TasksComponent } from "../tasks/tasks.component";
import { resolveTitle } from "./user-tasks/user-tasks.component";
import { inject } from "@angular/core";

// Las funciones de validacion pueden Utilizar Services/Observables y demas elementos, estas deben devolver un T/F.
// Generalmente si la direccion es aceptada madaremos TRUE y la ruta cargara un componente, en caso de denegar el acceso,
// En vez de FALSE debemos hacer una redireccion.
const dummyCanMath: CanMatchFn = (route, segments) => {
    const router = inject(Router);
    return true;
    return new RedirectCommand(router.parseUrl('hello'));
}
export const userRoutes: Routes =
[
    {
        path: '',
        redirectTo: 'tasks',
        pathMatch: 'full',
        title: 'No Tasks Selected'  
    },
    {
        path: 'tasks', // <your-domain>/users/<uid>/tasks
        component: TasksComponent,
        runGuardsAndResolvers: 'always',
        resolve: {
            userTasks: resolveUserTasks,
        },
        title: resolveTitle,
        canMatch: [dummyCanMath]
    },
    {
        path: 'tasks/new',
        component: NewTaskComponent,
        canDeactivate: [canLeaveEditPAge]
    },
]

