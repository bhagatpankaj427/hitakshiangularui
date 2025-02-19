import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoaderService } from './loader.service';
import { Observable } from 'rxjs';
import { MatProgressBarModule } from '@angular/material/progress-bar'; // ✅ Import this!
import { CommonModule } from '@angular/common'; // ✅ Import CommonModule for async pipe

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule,MatProgressBarModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isLoading1 = false;
  isLoading$: Observable<boolean>;  // Define as Observable

  constructor(private loaderService: LoaderService) {
    this.isLoading$ = this.loaderService.isLoading;    
  }
  fetchData() {
    this.loaderService.show(); // ✅ Show loader before API call
    
    setTimeout(() => {
      console.log("🔹 API call completed");
      this.loaderService.hide(); // ✅ Hide loader after API response
    }, 3000); // Simulating API delay
  }
}
