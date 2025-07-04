import { Component, inject, input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TasksService } from '../tasks.service';
import { CanDeactivateFn, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  userId = input.required<string>();
  enteredTitle = signal('');
  enteredSummary = signal('');
  enteredDate = signal('');
  submited = signal(false);
  private tasksService = inject(TasksService);
  private router = inject(Router);

  onSubmit() {
    this.tasksService.addTask(
      {
        title: this.enteredTitle(),
        summary: this.enteredSummary(),
        date: this.enteredDate(),
      },
      this.userId()
    );
    this.submited.set(true);
    this.router.navigate(['/users/'+this.userId()+'/tasks'],{
      replaceUrl: true // Esto sirve para el usuario no use el BackButton para volver al formulario, especialmente si ya 
      // Publique el forms
    })  
  }
}

// Recibe como parametro el Componente del que me quiero ir.
export const canLeaveEditPAge: CanDeactivateFn<NewTaskComponent> = (component) => {
  if(component.submited()) return true;
  if(component.enteredTitle() || component.enteredDate() || component.enteredSummary()){
    return window.confirm('Do you really want to leave? You will lose you data');
  }
  return true;
}
