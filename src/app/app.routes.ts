import { Routes } from '@angular/router';
import { Home } from './core/home/home';
import { Notfound } from './core/notfound/notfound';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  {
    path: 'events', //   :events=>list,   events/1=> details,  events/add=> formd'ajoput.....
    loadChildren: () => import('./features/event/event.routes').then((m) => m.event_routes),
  },
  { path: '**', component: Notfound },
];
