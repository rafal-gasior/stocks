import { Component, OnInit, Input } from '@angular/core';
import { HttpService} from '../service/http.service';
import { StockInterface} from '../service/http.service';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {
//@Input() cols = 3;
  stocks : Array<StockInterface> = [];
  symbols : Array<string> = [];
  constructor(private service : HttpService) {
    this.symbols = service.get()
  }

  ngOnInit() {
    this.service.load(this.symbols).subscribe(stocks => {
      this.stocks = stocks;
    });
  }


}
