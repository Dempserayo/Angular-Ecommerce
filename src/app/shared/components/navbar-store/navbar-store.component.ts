import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { MatIcon } from '@angular/material/icon';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-navbar-store',
  imports: [SidebarComponent, MatIcon,NgIf],
  templateUrl: './navbar-store.component.html',
  styleUrl: './navbar-store.component.css'
})
export class NavbarStoreComponent {
  isSidebarOpen = false;
  isAnimating = false;

  toggleSidebar() {
    if (this.isAnimating) return;
    
    this.isAnimating = true;
    this.isSidebarOpen = !this.isSidebarOpen;
    
    // Reset animation flag after animation completes
    setTimeout(() => {
      this.isAnimating = false;
    }, 300); // Match the duration in the template
  }
}
