import { Inject, Injectable } from '@angular/core';
import { DiscountProvider } from './discount-provider';
import { PercentageDiscountProvider } from './percentage-discount-provider.service';

@Injectable({
  providedIn: 'root',
})
export class TenPercentageDiscountProvider extends PercentageDiscountProvider {
  constructor() {
    super(10);
  }
}
