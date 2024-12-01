import { Routes } from '@angular/router';
import { CartelComponent } from './pages/cartel/cartel.component';

export const routes: Routes = [
  { path: '', component: CartelComponent }, // Default route pointing to MainComponent
  { path: '**', redirectTo: '', pathMatch: 'full' }, // Redirect any unknown paths to the default route
];
