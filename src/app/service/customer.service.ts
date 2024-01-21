// customer.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../model/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private apiUrl = 'https://dia.ideaco.co.id:8787/api/v1/customers';

  constructor(private http: HttpClient) {}

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.apiUrl);
  }

  exportCustomersToCSV(): Observable<any> {
    const exportUrl = `${this.apiUrl}/export`; // Adjust the URL according to your API
    return this.http.get(exportUrl, { responseType: 'text' });
  }
}
