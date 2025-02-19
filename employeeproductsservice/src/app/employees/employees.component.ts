import { Component,OnInit  } from '@angular/core';
import { EmployeeserviceService } from '../employeeservice.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.scss'
})
export class EmployeesComponent implements OnInit {
  posts: any[] = [];
  constructor(private EmployeeserviceService: EmployeeserviceService) {}

  ngOnInit() {
    this.EmployeeserviceService.getAllEmployees().subscribe({
      next: (data) => this.posts = data,
      error: (err) => console.error('Error fetching data', err)
    });
  }
}
