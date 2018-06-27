import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BitCoin } from '../../models/bitcoin.model';

@Injectable()
export class BitcoinProvider {

  private ROOT_URL = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/BTC';

  constructor(public http: HttpClient) {

  }

  getBitcoinPrice(currency: string) {
    return this.http.get<BitCoin>(this.ROOT_URL + currency);
  }
}
