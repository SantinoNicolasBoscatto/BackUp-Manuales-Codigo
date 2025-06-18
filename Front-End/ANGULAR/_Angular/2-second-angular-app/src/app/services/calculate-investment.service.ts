import { Injectable, signal } from '@angular/core';
import { CalculatedFormatData } from '../interfaces/calculatedFormatData';

@Injectable({
  providedIn: 'root'
})
export class CalculateInvestmentService {
  public calculatedFormatData = signal<Array<CalculatedFormatData> | undefined>(undefined);
  
  public calculateInvestmentResults  (initialInvestment: number, annualInvestment: number, expectedReturn: number, duration: number) {
      const annualData = [];
      let investmentValue = initialInvestment;
      for (let i = 0; i < duration; i++) {
        const year = i + 1;
        const interestEarnedInYear = investmentValue * (expectedReturn / 100);
        investmentValue += interestEarnedInYear + annualInvestment;
        const totalInterest =
          investmentValue - annualInvestment * year - initialInvestment;
        annualData.push({
          year: year,
          interest: interestEarnedInYear,
          valueEndOfYear: investmentValue,
          annualInvestment: annualInvestment,
          totalInterest: totalInterest,
          totalAmountInvested: initialInvestment + annualInvestment * year,
        });
      }
      this.calculatedFormatData.set(annualData);
    }
}
