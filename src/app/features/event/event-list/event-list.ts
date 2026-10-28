import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { Event } from '../../../models/event';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { EventService } from '../../../services/event-service';
import { Card } from '../../../core/core/card/card';

@Component({
  selector: 'app-event-list',
  imports: [CommonModule ,FormsModule, RouterLink,Card],
  templateUrl: './event-list.html',
  styleUrl: './event-list.css',
})
export class EventList {
  //first method winth constructor
  constructor(private service: EventService) {}

  //seconf method
  eventService = inject(EventService);
  title = signal('Event List');
  titre = 'list';
  compteur = signal(0);
  item = '';
  filtredList = signal<Event[]>([]);

  ngOnInit() {
    this.titre = 'liste des eventnements';
    this.title.set('Liste des événement');
    this.compteur.update((compteur) => this.compteur() + 1);
    console.log(this.compteur());
  }
  events = signal(this.eventService.getEventList());
  favoriteList = signal<Event[]>([]);

  // incerementNbLikes(event: Event) {
  //   return event.nbLikes++;
  // }

  incerementNbLikes(event: Event) {
    return this.events.update((events) =>
      events.map((e) => (e.id == event.id ? { ...e, nbLikes: e.nbLikes + 1 } : e)),
    );
  }

  addToFavorite(event: Event) {
    if (!this.favoriteList().includes(event)) {
      this.favoriteList().push(event);
    }
    return this.favoriteList;
  }

  get filteredEvents() {
    const search = this.item.toLowerCase();

    return this.events().filter((event) => event.category.toLowerCase().includes(search));
  }
}
