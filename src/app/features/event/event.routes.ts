import { Routes } from '@angular/router';

export const event_routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./event-list/event-list').then((m) => m.EventList),
  },
  {
    path: 'add',
    loadComponent: () => import('./event-form/event-form').then((m) => m.EventForm),
  },
  {
    path: ':id',
    loadComponent: () => import('./event-details/event-details').then((m) => m.EventDetails),
  },
  
];
