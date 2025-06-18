import { AfterViewInit, Component, ElementRef, EventEmitter, Output, viewChild, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from "../../../shared/control/control.component";
import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    
  }

  enteredTitle = '';
  enteredText = '';

  @Output() add = new EventEmitter<{title: string, text: string}>();
  private form = viewChild<ElementRef<HTMLFormElement>>('form');

  onSubmit(){
    this.add.emit({title: this.enteredTitle, text: this.enteredText})
    this.enteredTitle = '';
    this.enteredText = '';
  }
}
