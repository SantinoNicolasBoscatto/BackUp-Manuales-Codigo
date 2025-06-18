import { ResolveFn, Routes } from '@angular/router';

import { TasksComponent } from '../tasks/tasks.component';
import { NewTaskComponent, canLeaveEditPage } from '../tasks/new-task/new-task.component';
import { inject } from '@angular/core';
import { Task } from '../tasks/task/task.model';
import { TasksService } from '../tasks/tasks.service';
const resolveUserTasks: ResolveFn<Task[]> = (
  activatedRouteSnapshot,
  routerState
) => {
  const order = activatedRouteSnapshot.queryParams['order'];
  const tasksService = inject(TasksService);
  const tasks = tasksService
    .allTasks()
    .filter(
      (task) => task.userId === activatedRouteSnapshot.paramMap.get('userId')
    );

  if (order && order === 'asc') {
    tasks.sort((a, b) => (a.id > b.id ? 1 : -1));
  } else {
    tasks.sort((a, b) => (a.id > b.id ? -1 : 1));
  }

  return tasks.length ? tasks : [];
};

// Para el LazyLoading de un servicio lo que hacemos es agregar una ruta extra en la definicion de las rutas
// que funcionara de Wrapper para todas las rutas que usen nuestro service. Dentro de esta ruta definiremos el 
// El service mediante providers. El service estara disponible en todos mis Childrens
export const userRoutes: Routes = [
  {
    path: '',
    providers: [TasksService], // Esto no produce EagleLoading ya que UserRoutes es cargado con LazyLoading
    children: [
      {
        path: '',
        redirectTo: 'tasks',
        pathMatch: 'full',
      },
      {
        path: 'tasks', // <your-domain>/users/<uid>/tasks
        component: TasksComponent,
        runGuardsAndResolvers: 'always',
        resolve: {
          userTasks: resolveUserTasks,
        },
      },
      {
        path: 'tasks/new',
        component: NewTaskComponent,
        canDeactivate: [canLeaveEditPage]
      },
    ]
  }
];
