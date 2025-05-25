import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-store-main',
  imports: [MatIconModule, CommonModule],
  templateUrl: './store-main.component.html',
  styleUrl: './store-main.component.css'
})
export class StoreMainComponent {
  isCollapsed = true;
    
  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }
}
