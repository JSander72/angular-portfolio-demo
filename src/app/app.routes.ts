import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: Dashboard },
  // you can add more pages later, e.g. { path: 'pokemon/:id', component: DetailComponent }
  { path: '**', redirectTo: 'dashboard' }
];
