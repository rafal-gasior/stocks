import { TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpService } from './http.service';

describe('Stocks service', () => {
  let service, http;
  const MockSymbolList: Array<string> = ['AAPL']
  const MockStockResponse: any = [{ "symbol": "AAPL", "lastTradePriceOnly": 218.82, "change": -1.0699921, "changeInPercent": -0.0048660333 }];
  const baseUrl: string = "http://angular2-in-action-api.herokuapp.com/stocks/snapshot?symbols=";

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpService]
    });
    service = TestBed.get(HttpService);
    http = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    http.verify();
  })

  it('should create instance', async(() => {
    expect(service).toBeTruthy();
  }));

  it('get stock list from service', (done) => {
    service.load(MockSymbolList).subscribe(result => {
      expect(result).toEqual(MockStockResponse);
      done();
    });

    const request = http.expectOne(baseUrl + MockSymbolList.join(','));
    request.flush(MockStockResponse);
  });

});
