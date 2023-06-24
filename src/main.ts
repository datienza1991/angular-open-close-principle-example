import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { EnGreetingService } from './greeting/en-greeting.service';
import { EnLanguageProvider } from './greeting/en-language-provider.service';
import { PhLanguageProvider } from './greeting/ph-language-provider.service';
import { PhGreetingService } from './greeting/ph-greeting.service';
import { DiscountProvider } from './discount/discount-provider';
import { PercentageDiscountProvider } from './discount/percentage-discount-provider.service';
import { PercentageDiscountService } from './discount/percentage-discount.service';
import { TenPercentageDiscountProvider } from './discount/ten-percent-discount-provider.service';
import { TenFixAmountDiscountProvider } from './discount/ten-fix-amount-discount-provider';
import { FixAmountDiscountService } from './discount/fix-amount-discount.service';

@Component({
  selector: 'my-app',
  standalone: true,
  providers: [
    EnGreetingService,
    EnLanguageProvider,
    PhLanguageProvider,
    PhGreetingService,
    TenPercentageDiscountProvider,
    PercentageDiscountService,
    TenFixAmountDiscountProvider,
    FixAmountDiscountService,
  ],
  imports: [CommonModule],
  template: `
    <h1>{{greeting}} {{name}}!</h1>
    <h1>{{phGreeting}} {{name}}!</h1>
    <h1>Percentage Discount: {{discount}}</h1>
    <h1>Fix Amount Discount: {{fixAmount}}</h1>
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular 
    </a>
  `,
})
export class App {
  constructor(
    private enGreetingService: EnGreetingService,
    private phGreetingService: PhGreetingService,
    private percentageDiscountService: PercentageDiscountService,
    private fixAmountDiscountService: FixAmountDiscountService
  ) {}
  name = 'Angular';
  greeting = this.enGreetingService.execute();
  phGreeting = this.phGreetingService.execute();
  discount = this.percentageDiscountService.applyDiscount(30);
  fixAmount = this.fixAmountDiscountService.applyDiscount(30);
}

bootstrapApplication(App);
