import { Component ,HostListener, ViewChild} from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoaderService } from './loader.service';
import { Observable } from 'rxjs';
import { MatProgressBarModule } from '@angular/material/progress-bar'; // ✅ Import this!
import { CommonModule } from '@angular/common'; // ✅ Import CommonModule for async pipe
import { SidebarComponent } from './menu/sidebar/sidebar.component';
import { MatSidenav } from '@angular/material/sidenav';
import { MatSidenavModule } from '@angular/material/sidenav'; // Import MatSidenavModule
import { MatButtonModule } from '@angular/material/button';   // For mat-button

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule,MatProgressBarModule,CommonModule,SidebarComponent,MatSidenavModule,MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;  // Non-null assertion operator
  isLoading1 = false;
  isLoading$: Observable<boolean>;  // Define as Observable
  
  constructor(private loaderService: LoaderService) {
    this.isLoading$ = this.loaderService.isLoading;   
    this.checkScreenSize(); 
  }
  fetchData() {
    this.loaderService.show(); // ✅ Show loader before API call
    
    setTimeout(() => {
      console.log("🔹 API call completed");
      this.loaderService.hide(); // ✅ Hide loader after API response
    }, 3000); // Simulating API delay
  }

  isExpanded = true;
  isMobile = false;
  @HostListener('window:resize', [])
  checkScreenSize() {
    this.isMobile = window.innerWidth < 768;
    if (this.isMobile) {
      this.isExpanded = false;
    }
  }
  
   // Method to toggle sidebar
   toggleSidebar() {
    this.sidenav.toggle();  // Toggle the sidenav visibility
  }
}
