import { Inject, Injectable } from '@angular/core';
import { DiscountProvider } from './discount-provider';

export class PercentageDiscountProvider implements DiscountProvider {
  constructor(private percentage: number) {}
  calculateDiscount(price: number): number {
    return (price * this.percentage) / 100;
  }
}
