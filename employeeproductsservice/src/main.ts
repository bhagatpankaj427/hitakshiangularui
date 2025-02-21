import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { HomeComponent } from '../src/app/home/home.component';
import { EmployeesComponent } from '../src/app/employees/employees.component';
import { provideHttpClient } from '@angular/common/http';
import { EmployeeserviceService } from './app/employeeservice.service';
import { HTTP_INTERCEPTORS,withInterceptors } from '@angular/common/http';
import { LoaderInterceptor } from './app/interceptors/loader.interceptor';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {AddemployeeComponent} from './app/employees/addemployee/addemployee.component'

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', component: HomeComponent }, // Default route
      { path: 'employees', component: EmployeesComponent },
      {path: 'addemployees', component: AddemployeeComponent},
      { path: '**', redirectTo: '' }, // Handle unknown routes
    ]),
    provideHttpClient(), // ✅ Provides HttpClient for API calls
    EmployeeserviceService, provideAnimationsAsync() ,    // ✅ Provide the API service globally
  ],
}).catch(err => console.error(err));
