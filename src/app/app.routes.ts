import { Routes } from '@angular/router';
import { MainComponent } from './layout/main/main.component';

export const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            {
                path: 'home',
                loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
            },
            {
                path: 'semanas',
                loadComponent: () => import('./pages/semanas/semanas.component').then(m => m.SemanasComponent),
            },
            {
                path: '**',
                redirectTo: 'home',
            }
          
        ]
    }
];
