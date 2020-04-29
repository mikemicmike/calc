import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor() {}

  public convertRSPriceToNumber(p_price: string | number): number {
    if (typeof p_price === 'number') {
      return p_price;
    }
    return 0;
  }
}
