import { Component } from '@angular/core';
import { StoreMainComponent } from '../../components/store-main/store-main.component';
import { NavbarStoreComponent } from '../../components/navbar-store/navbar-store.component';

@Component({
  selector: 'app-store',
  imports: [StoreMainComponent, NavbarStoreComponent],
  templateUrl: './store.component.html',
  styleUrl: './store.component.css'
})
export class StoreComponent {

}
