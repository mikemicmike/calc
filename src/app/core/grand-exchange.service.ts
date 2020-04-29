import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface ICurrentPricing {
  trend: string;
  price: string;
}

interface ITrending {
  trend: string;
  change: string;
}
interface IDetail {
  item: {
    icon: string;
    icon_large: string;
    id: number;
    type: string;
    typeIcon: string;
    name: string;
    description: string;
    current: ICurrentPricing;
    today: ICurrentPricing;
    members: string;
    day30: ITrending;
    day90: ITrending;
    day180: ITrending;
  };
}

@Injectable({
  providedIn: 'root',
})
export class GrandExchangeService {
  private proxy: string = 'https://cors-anywhere.herokuapp.com/';

  constructor(private http: HttpClient) {}
  public getGePrice(p_itemId: number): Observable<IDetail> {
    return this.http.get(
      this.proxy +
        'services.runescape.com/m=itemdb_rs/api/catalogue/detail.json?item=' +
        p_itemId.toString()
    ) as Observable<IDetail>;
  }
}
