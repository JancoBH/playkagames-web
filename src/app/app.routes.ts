import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', loadComponent: () => import('./features/home/home').then(m => m.Home)},
  {path: 'logika', loadChildren: () => import('./features/logika/routes').then(m => m.LOGIKA_ROUTES)},
];
