import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Exchange } from '../interfaces/exchange.interface';
import { USDExchange } from '../interfaces/USDExchange.interface';

@Injectable({
  providedIn: 'root'
})
export class ExerciseSixService {

  constructor(private httpClient: HttpClient) { }

  private baseUrl: string = "https://api.frankfurter.app";

  getCurrentExchange(): Observable<Exchange> {
    return this.httpClient.get<Exchange>(`${this.baseUrl}/latest`);
  }

  getUSDExchange(): Observable<USDExchange> {
    const currentDate = new Date();
    const formattedDate = new Intl.DateTimeFormat("az", {dateStyle: "short"}).format(currentDate);
    return this.httpClient.get<USDExchange>(`${this.baseUrl}/2021-01-01..${formattedDate}?to=USD`);
  }

}
