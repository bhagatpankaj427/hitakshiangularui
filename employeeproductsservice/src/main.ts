import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { HomeComponent } from '../src/app/home/home.component';
import { EmployeesComponent } from '../src/app/employees/employees.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', component: HomeComponent }, // Default route
      { path: 'employees', component: EmployeesComponent },
      { path: '**', redirectTo: '' }, // Handle unknown routes
    ]),
  ],
}).catch(err => console.error(err));
