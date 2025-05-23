import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-navbar-main',
  standalone: true,
  imports: [MatIconModule, SidebarComponent, NgIf],
  templateUrl: './navbar-main.component.html',
  styleUrl: './navbar-main.component.css'
})
export class NavbarMainComponent {
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
