import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {
  private apiUrl = 'https://hitakshiawsmicroservice-c9h9addvbefegzcj.canadacentral-01.azurewebsites.net/v1/Employee/GetAllEmployees'; // Replace with your API URL
  constructor(private http: HttpClient) {

   }

   getAllEmployees(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
