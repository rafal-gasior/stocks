import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
let address : string = "http://angular2-in-action-api.herokuapp.com/stocks/snapshot?symbols=";
let addressHistorical : string = "http://angular2-in-action-api.herokuapp.com/stocks/historical/";
let symbols : Array<string> = ['FB','ATEN','WUBA','IBM','BOX','GWRE'];

export interface StockInterface{
  symbol: string,
  lastTradePriceOnly: number,
  change: number,
  changeInPercent : number
}

export interface StockHistoryInterface{
  symbol: string,
  date: Date,
  open: number,
  high: number,
  low : number,
  close : number,
  adjClose : number,
  volume : number
}


@Injectable()
export class HttpService {
  constructor(private http : HttpClient) { }

  load(symbols){
    return this.http.get<Array<StockInterface>>(address + symbols.join());
  }

  loadStockHistory(symbol){
    return this.http.get<Array<StockHistoryInterface>>(addressHistorical + symbol);
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
