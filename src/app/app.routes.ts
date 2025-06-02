import { Routes } from '@angular/router';
import { ViewMainComponent } from './shared/pages/home/view-main/view-main.component';

export const routes: Routes = [

    {
        path: '',
        component: ViewMainComponent
    },
    {
        path: 'store',
        loadComponent:() => import('./shared/pages/store/store.component').then(c => c.StoreComponent)
    },
];
 