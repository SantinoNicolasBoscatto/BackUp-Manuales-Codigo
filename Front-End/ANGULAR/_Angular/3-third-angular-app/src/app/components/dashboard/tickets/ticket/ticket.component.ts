import { Component, input, output, signal } from '@angular/core';
import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  data = input.required<Ticket>();
  close = output();
  detailVisible = signal(false);

  onToggle(){
    this.detailVisible.update((oldValue) => !oldValue)
  }

  onMarkAsCompleted() {
    this.close.emit();
  }
}
