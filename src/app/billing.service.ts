import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Billing } from './billing';

@Injectable({
  providedIn: 'root'
})
export class BillingService {

  private baseUrl = "http://localhost:8080";
  private billingListUri = "/billing/list";
  private billingCreateUri = "/billing/create";

  constructor(private HttpClient: HttpClient) { }

  public getBillingList(): Observable<Billing[]>{
    return this.HttpClient.get<Billing[]>(`${this.baseUrl+this.billingListUri}`);
  }

  public createBilling(billing: Billing): Observable<Billing>{
    return this.HttpClient.post(`${this.baseUrl+this.billingCreateUri}`, billing);
  }
}
