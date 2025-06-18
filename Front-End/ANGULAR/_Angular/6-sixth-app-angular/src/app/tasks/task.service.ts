import { inject, Injectable, signal } from '@angular/core';
import { Task, TaskStatus } from './task.model';
import { LoggingService } from '../logging.service';

@Injectable({
  providedIn: 'root' // El declarar root me permite inyectar el servicio en cualquier lugar
})
export class TaskService {
  private tasks = signal<Task[]>([]);
  private logService = inject(LoggingService);
  public allTasks = this.tasks.asReadonly();

  addTask(taskData: {title: string; description: string}){
    const newTask: Task = {
      ...taskData,
      id: Math.random().toString(),
      status: 'OPEN'
    }
    this.tasks.update((oldTasks) => [...oldTasks, newTask])
    this.logService.log('Added Task With Title: ' + taskData.title)
  }

  updateTasksStatus(taskId: string, newStatus: TaskStatus){
    this.tasks.update((oldTasks) => oldTasks.map(task => {
      if(task.id === taskId) return {...task, status: newStatus};
      return task;
    }))
    this.logService.log('Change Task Status To ' + newStatus);
  }
}
