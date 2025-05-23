import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterMainComponent } from './shared/components/footer/footer-main/footer-main.component';
import { NavbarMainComponent } from './shared/components/navbar/navbar-main/navbar-main.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarMainComponent, FooterMainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-project';
}
