import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./components/home/home.component').then((m) => m.HomeComponent),
  },

  {
    path: 'contact',
    loadComponent: () => import('./components/contact/contact.component').then((m) => m.ContactComponent ),
  },
  {
    path: 'about',
    loadComponent: () => import('./components/about/about.component').then( (m) => m.AboutComponent ),
  },
];
