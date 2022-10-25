import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiMiddlewareService {
  public baseUrl = environment.apiURL;

  constructor(private httpClient: HttpClient) { }

  public login(): Observable<any> {  
      return of(this.baseUrl);
    // return this.httpClient.get(this.baseUrl);
  }

  public getStores() {
    const dummyStoreList = ['seven-logo', 'momo-logo', 'hilife-logo', 'fmart-logo'];
    return of({stores: dummyStoreList});
  }

  public getAmountRange(store:string) {
    const dummyAmountList = ['500', '1000', '1500', '2000', '3000', '4000', '5000', '6000'];
    const dummyAmountList2 = ['3000', '6000'];
    return store === 'seven-logo'? of({amonts: dummyAmountList}) : of({amonts: dummyAmountList2});
  }

} 
