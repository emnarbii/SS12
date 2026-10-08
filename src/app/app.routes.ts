import { Routes } from '@angular/router';
import { Home } from './core/home/home';
import { EventList } from './core/event-list/event-list';
import { Notfound } from './notfound/notfound';
import { EventDetails } from './core/event-details/event-details';

export const r: Routes = [
  { path: '', redirectTo: 'events', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'events', component: EventList },
  {path:"events/:id", component:EventDetails},
  { path: '**', component: Notfound },
];
