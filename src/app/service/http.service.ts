import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
let address : string = "http://angular2-in-action-api.herokuapp.com/stocks/snapshot?symbols=";
let symbols : Array<string> = ['FB','ATEN','DVMT','IBM','BOX','GWRE'];

export interface StockInterface{
  symbol: string,
  lastTradePriceOnly: number,
  change: number,
  changeInPercent : number
}


@Injectable()
export class HttpService {
  constructor(private http : HttpClient) { }

  load(symbols){
    return this.http.get<Array<StockInterface>>(address + symbols.join());
  }

  get(){
    return symbols.slice();
  }

  add(symbol){
    symbols.push(symbol);
    return this.get();
  }

  remove(symbol){
    symbols.splice(symbols.indexOf(symbol),1);
    return this.get();
  }

}
