import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: 'signals',
    title: 'UAM: Signals',
    loadComponent: () =>
      import('./signals/signals.component').then((mod) => mod.SignalsComponent),
  },
  { path: '', component: HomeComponent },
];
