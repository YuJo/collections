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
}
