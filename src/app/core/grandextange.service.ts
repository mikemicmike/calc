import { Injectable } from '@angular/core';
import * as moment from 'moment';

const PROXY: string = 'https://cors-anywhere.herokuapp.com/';

@Injectable({
  providedIn: 'root',
})
export class GrandextangeService {
  constructor() {}

  public async getItemPrice(itemId: number): Promise<string> {
    const data = await fetch(
      `${PROXY}services.runescape.com/m=itemdb_rs/api/catalogue/detail.json?item=${itemId}`
    );

    const {
      item: {
        current: { price },
      },
    } = await data.json();

    return price;
  }

  public async getLastUpdateTime(): Promise<string> {
    const data = await fetch(
      `${PROXY}secure.runescape.com/m=itemdb_rs/api/info.json`
    );
    const { lastConfigUpdateRuneday } = await data.json();
    const update = moment('27 February 2002 00:00 UTC')
      .add(lastConfigUpdateRuneday, 'days')
      .toLocaleString();

    return update;
  }
}
