import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Pro } from './pages/pro/pro';
import { EnquiryForm } from './pages/enquiry-form/enquiry-form';
import { Signup } from './pages/Auth/signup/signup';

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
    path: 'enquiry-form',
    component: EnquiryForm,
  },
  //wild card route for a 404 page
  {
    path: '**',
    component: Home,
  },
];
