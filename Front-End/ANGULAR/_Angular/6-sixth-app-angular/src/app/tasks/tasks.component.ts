import { Component } from '@angular/core';

import { NewTaskComponent } from './new-task/new-task.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { TaskService } from './task.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  imports: [NewTaskComponent, TasksListComponent], 
  // providers: [TaskService] // Puedo definir valores (elementos) que pueden ser inyectados en este 
               // elemento. Los hijos de este componente tambien tendran acceso a esta inyeccion.
})
export class TasksComponent {}
