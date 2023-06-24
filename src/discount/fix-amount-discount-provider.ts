import { DiscountProvider } from './discount-provider';

export class FixAmountDiscountProvider implements DiscountProvider {
  constructor(private amount: number) {}
  calculateDiscount(price: number): number {
    if (price <= 20) {
      return 0;
    }
    return this.amount;
  }
}
