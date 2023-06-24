import { Injectable } from '@angular/core';
import { DiscountService } from './discount.service';
import { TenFixAmountDiscountProvider } from './ten-fix-amount-discount-provider';

@Injectable({
  providedIn: 'root',
})
export class FixAmountDiscountService extends DiscountService {
  constructor(discountProvider: TenFixAmountDiscountProvider) {
    super(discountProvider);
  }
}
