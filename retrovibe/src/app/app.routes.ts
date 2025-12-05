import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Pro } from './pages/pro/pro';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: Home,
  },
  {
    path: 'pro',
    component: Pro,
  },
  //wild card route for a 404 page
  {
    path: '**',
    component: Home,
  },
];
