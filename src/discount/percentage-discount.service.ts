import { Injectable } from '@angular/core';
import { DiscountService } from './discount.service';
import { FiftyPercentageDiscountProvider } from './fifty-percent-discount-provider.service';

@Injectable({
  providedIn: 'root',
})
export class PercentageDiscountService extends DiscountService {
  constructor(percentageDiscountProvider: FiftyPercentageDiscountProvider) {
    super(percentageDiscountProvider);
  }
}
