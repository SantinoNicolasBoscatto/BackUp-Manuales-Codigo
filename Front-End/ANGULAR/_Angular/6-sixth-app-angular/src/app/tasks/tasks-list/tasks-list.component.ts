import { Component, computed, inject, signal } from '@angular/core';

import { TaskItemComponent } from './task-item/task-item.component';
import { TaskService } from '../task.service';
import { TASK_STATUS_OPTIONS, TaskStatusOptions } from '../task.model';


@Component({
  selector: 'app-tasks-list',
  standalone: true,
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
  imports: [TaskItemComponent],
  providers: [{
    provide: TASK_STATUS_OPTIONS, useValue: TaskStatusOptions
  }]
})

export class TasksListComponent {
  private tasksService = inject(TaskService);
  private selectedFilter = signal<string>('all');
  tasks = computed(() => {
    switch (this.selectedFilter()){
      case 'open': 
        return this.tasksService.allTasks().filter(x => x.status === 'OPEN');
      case 'in-progress':
        return this.tasksService.allTasks().filter(x => x.status === 'IN_PROGRESS');
      case 'done':
        return this.tasksService.allTasks().filter(x => x.status === 'DONE');
      default:
        return this.tasksService.allTasks();
    }
  });

  onChangeTasksFilter(filter: string) {
    this.selectedFilter.set(filter);
  }
}
