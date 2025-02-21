import { Component,HostListener  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule,MatSidenavModule,MatButtonModule,MatIconModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  ordersExpanded = false;
  reportsExpanded = false;

  toggleOrders() {
    this.ordersExpanded = !this.ordersExpanded;
  }

  toggleReports() {
    this.reportsExpanded = !this.reportsExpanded;
  }
}
