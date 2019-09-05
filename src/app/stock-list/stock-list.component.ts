import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {

  @Input() symbols : Array<string>;
  constructor() { }

  ngOnInit() {
  }

}
