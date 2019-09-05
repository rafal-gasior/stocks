import { Component, OnInit } from '@angular/core';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.css']
})
export class AddStockComponent implements OnInit {

  symbols : Array<string> = [];

  //przychodzi z formularza:
  symbol: string;

  constructor(private service: HttpService) {
    this.symbols = service.get();
  }

  ngOnInit() {
  }
  add(){
      this.symbols = this.service.add(this.symbol);
  }

  remove(symbol){
    this.symbols = this.service.remove(symbol);
  }

}
