import { Component, OnInit } from '@angular/core';
import { HttpService} from '../service/http.service';
import { StockInterface} from '../service/http.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service : HttpService) {

  }

  ngOnInit() {

  }

}
