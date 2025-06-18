import { Component, EventEmitter, inject, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalculatedFormatData } from '../../interfaces/calculatedFormatData';
import { CalculateInvestmentService } from '../../services/calculate-investment.service';
@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  initialInvesment = signal<string>('0');
  annualInvesment = signal<string>('0');
  expectedReturn = signal<string>('5');
  duration = signal<string>('10');
  calculateService = inject(CalculateInvestmentService);

  onSubmit(){
    this.calculateService.calculateInvestmentResults
      (+this.initialInvesment(), +this.annualInvesment(), +this.expectedReturn(), +this.duration());
  } 
}
