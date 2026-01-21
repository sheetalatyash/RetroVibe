import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Pro } from './pages/pro/pro';
import { Signup } from './pages/Auth/signup/signup';
import { TusUploadComponent } from './pages/tus-upload/tus-upload';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  { path: 'signup', component: Signup },

  {
    path: 'home',
    component: Home,
  },
  {
    path: 'pro',
    component: Pro,
  },
  {
    path: 'upload',
    component: TusUploadComponent,
  },
  //wild card route for a 404 page
  {
    path: '**',
    component: Home,
  },
];
