import { Component, OnInit, Input } from '@angular/core';
import { StockInterface } from '../service/http.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  @Input() stock : StockInterface;
  constructor() {

  }

  ngOnInit() {
  }

}
