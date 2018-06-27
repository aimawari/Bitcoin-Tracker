import { BitcoinProvider } from './../../providers/bitcoin/bitcoin';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { BitCoin } from '../../models/bitcoin.model';

/**
 * Generated class for the BitcoinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bitcoin',
  templateUrl: 'bitcoin.html',
})
export class BitcoinPage {
  currency: string = 'GBP';
  bitcoin$: Observable<BitCoin>;

  constructor(public navCtrl: NavController, public navParams: NavParams,private bitcoinProvider: BitcoinProvider) {
    
  }

  ionViewDidLoad() {
    this.getBitcoinPrice();
  }

  getBitcoinPrice(){
    this.bitcoin$ = this.bitcoinProvider.getBitcoinPrice(this.currency);
  }


}
