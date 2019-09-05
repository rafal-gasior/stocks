import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material';

import { AppComponent } from './app.component';
import { StocksComponent } from './stocks/stocks.component';
import { StockComponent } from './stock/stock.component';
import { HttpClientModule } from '@angular/common/http';
import {HttpService} from './service/http.service';
import {AppRoutes} from './routes';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AddStockComponent } from './add-stock/add-stock.component';
import { StockListComponent } from './stock-list/stock-list.component';
import { ColorDirective } from './directives/color.directive';

@NgModule({
  declarations: [
    AppComponent,
    StocksComponent,
    StockComponent,
    HomeComponent,
    AddStockComponent,
    StockListComponent,
    ColorDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    AppRoutes
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
