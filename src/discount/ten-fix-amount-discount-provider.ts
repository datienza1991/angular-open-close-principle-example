import { Inject, Injectable } from '@angular/core';
import { DiscountProvider } from './discount-provider';
import { FixAmountDiscountProvider } from './fix-amount-discount-provider';
import { PercentageDiscountProvider } from './percentage-discount-provider.service';

@Injectable({
  providedIn: 'root',
})
export class TenFixAmountDiscountProvider extends FixAmountDiscountProvider {
  constructor() {
    super(10);
  }
}
