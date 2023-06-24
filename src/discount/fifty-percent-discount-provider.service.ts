import { Inject, Injectable } from '@angular/core';
import { DiscountProvider } from './discount-provider';
import { PercentageDiscountProvider } from './percentage-discount-provider.service';

@Injectable({
  providedIn: 'root',
})
export class FiftyPercentageDiscountProvider extends PercentageDiscountProvider {
  constructor() {
    super(50);
  }
}
