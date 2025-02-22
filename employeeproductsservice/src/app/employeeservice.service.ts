import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {
  private apiUrl = 'https://hitakshiawsmicroservice-c9h9addvbefegzcj.canadacentral-01.azurewebsites.net/v1/Employee/GetAllEmployees'; //'https://hitakshiawsmicroservice-c9h9addvbefegzcj.canadacentral-01.azurewebsites.net/v1/Employee/GetAllEmployees'; // Replace with your API URL
  
  private addEmployeeUrl = 'https://hitakshiawsmicroservice-c9h9addvbefegzcj.canadacentral-01.azurewebsites.net/v1/Employee/AddEmployee';
  constructor(private http: HttpClient) {

   }

   getAllEmployees(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

   // Method to POST Employee data
   addEmployee(employee: FormData): Observable<any> {
    console.log(employee);
    return this.http.post<any>(this.addEmployeeUrl, employee);
  }
}
