import { Injectable } from '@angular/core';
import { DiscountProvider } from './discount-provider';

export class DiscountService {
  constructor(private discountProvider: DiscountProvider) {}

  applyDiscount(price: number): number {
    return this.discountProvider.calculateDiscount(price);
  }
}
