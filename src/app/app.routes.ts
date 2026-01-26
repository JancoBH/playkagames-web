import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', loadComponent: () => import('./features/home/home').then(m => m.Home)},
  {path: 'contact', loadComponent: () => import('./features/contact/contact').then(m => m.Contact)},
  {path: 'logika', loadChildren: () => import('./features/logika/routes').then(m => m.LOGIKA_ROUTES)},
  {path: 'blog', loadChildren: () => import('./features/blog/routes').then(m => m.BLOG_ROUTES)},
];
