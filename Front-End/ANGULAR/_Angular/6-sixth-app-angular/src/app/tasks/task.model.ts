import { InjectionToken } from "@angular/core";

export type TaskStatus = 'OPEN' | 'IN_PROGRESS' | 'DONE';

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}

export const TASK_STATUS_OPTIONS = new InjectionToken<{value: string, taskStatus: TaskStatus, text: string}[]>('task-status-options')
export const TaskStatusOptions: {value: string, taskStatus: TaskStatus, text: string}[] = [
  {
    value: 'open',
    taskStatus: 'OPEN',
    text: 'Open'
  },
   {
    value: 'in-progress',
    taskStatus: 'IN_PROGRESS',
    text: 'In-Progress'
  },
   {
    value: 'done',
    taskStatus: 'DONE',
    text: 'Completed'
  }
]