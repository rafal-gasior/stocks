import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router'
import { StockHistoryInterface, HttpService } from '../service/http.service';
import * as Highcharts from 'highcharts';

declare var require: any;
let Boost = require('highcharts/modules/boost');
let noData = require('highcharts/modules/no-data-to-display');
let More = require('highcharts/highcharts-more');

Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
noData(Highcharts);
@Component({
  selector: 'app-stock-more',
  templateUrl: './stock-more.component.html',
  styleUrls: ['./stock-more.component.css']
})
export class StockMoreComponent implements OnInit {
  stockHistory: Array<StockHistoryInterface> = [];
  /*highchart data:*/
  private dates: Array<Date> = [];
  private opens: Array<number> = [];
  private highs: Array<number> = [];
  private lows: Array<number> = [];
  private closes: Array<number> = [];
  private volumes: Array<number> = [];
  private options: any;
  symbol: string = "";



  constructor(private service: HttpService,
    private router: Router,
    private route: ActivatedRoute) {
    this.route.params.subscribe((params: Params) => {
      this.symbol = params['stock_alias'];
      this.service.loadStockHistory(this.symbol).subscribe(stockMore => {
        this.stockHistory = stockMore;
        for (let history of this.stockHistory) {
          this.dates.push(new Date(history.date));
          this.opens.push(history.open);
          this.highs.push(history.high);
          this.lows.push(history.low);
          this.closes.push(history.close);
          this.volumes.push(history.volume);
        }
        this.options = {
          title: {
            text: 'Stock ' + this.symbol + ' chart'
          },
          credits: {
            enabled: false
          },
          tooltip: {
            formatter: function() {
              return 'date: ' + Highcharts.dateFormat('%e %b %y', this.x) +
                ' value: ' + this.y.toFixed(2);
            }
          },
          xAxis: {
            type: 'datetime',
            labels: {
              format: '{value:%Y-%b-%e}'
            },
            tickInterval: 10,
            title: {
              text: 'Date'
            },
            categories: this.dates
          },
          series: [
            {
              name: 'Open',
              data: this.opens
            },
            {
              name: 'High',
              data: this.highs
            },
            {
              name: 'Low',
              data: this.lows
            },
            {
              name: 'Close',
              data: this.closes
            }
          ]
        };
        Highcharts.chart('container', this.options);
      });
    });
  }

  ngOnInit() {
  }

}
