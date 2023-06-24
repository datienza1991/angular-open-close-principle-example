export interface DiscountProvider {
  calculateDiscount(price: number): number;
}
