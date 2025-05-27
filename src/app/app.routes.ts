import { Routes } from '@angular/router';
import { ViewMainComponent } from './shared/pages/home/view-main/view-main.component';
import { StoreComponent } from './shared/pages/store/store.component';

export const routes: Routes = [

    {
        path: '',
        component: ViewMainComponent
    },
    {
        path: 'store',
        component: StoreComponent
    }
];
 