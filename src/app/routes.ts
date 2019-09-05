import {Routes, RouterModule} from "@angular/router";
import {AppComponent} from './app.component';
import {StocksComponent} from './stocks/stocks.component';
import {HomeComponent} from './home/home.component';
import {AddStockComponent} from './add-stock/add-stock.component';


const routes: Routes =[
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'stocks',
    component: AddStockComponent
  }
];

export const AppRoutes = RouterModule.forRoot(routes);
