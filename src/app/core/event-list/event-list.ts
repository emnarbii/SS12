import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { Event } from '../../models/event';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-event-list',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './event-list.html',
  styleUrl: './event-list.css',
})
export class EventList {
  title = signal('Event List');
  titre = 'list';
  compteur = signal(0);
  item="";
  filtredList=signal<Event[]>([]);

  ngOnInit() {
    this.titre = 'liste des eventnements';
    this.title.set('Liste des événement');
    this.compteur.update((compteur) => this.compteur() + 1);
    console.log(this.compteur());
  }
  favoriteList= signal<Event[]>([]);
  events=signal<Event[]>([
    {
      id: 1,
      titre: 'Angular Workshops',
      description: 'Découvrez les nouveautés d Angular et développez vos compétences.',
      date: new Date('2026-10-15'),
      lieu: 'Tunis',
      prix: 50,
      imageUrl: 'images/event.png',
      nbPlaces: 30,
      category: 'Technologie',
      nbLikes: 0,
    },
    {
      id: 2,
      titre: 'Music Festival 2026',
      description: 'Un festival musical avec plusieurs artistes et groupes.',
      date: new Date('2026-10-22'),
      lieu: 'Sousse',
      prix: 80,
      imageUrl: 'images/event.png',
      nbPlaces: 500,
      category: 'Musique',
      nbLikes: 0,
    },
    {
      id: 3,
      titre: 'AI & Innovation Conference',
      description: 'Une conférence consacrée à l intelligence artificielle et à l innovation.',
      date: new Date('2026-11-18'),
      lieu: 'Hammamet',
      prix: 100,
      imageUrl: 'images/event.png',
      nbPlaces: 150,
      category: 'Technologie',
      nbLikes: 0,
    },
    {
      id: 4,
      titre: 'Startup Meetup',
      description: 'Une rencontre entre entrepreneurs, étudiants et professionnels.',
      date: new Date('2026-11-05'),
      lieu: 'Tunis',
      prix: 30,
      imageUrl: 'images/event.png',
      nbPlaces: 100,
      category: 'Business',
      nbLikes: 0,
    },
  ]);

  // incerementNbLikes(event: Event) {
  //   return event.nbLikes++;
  // }


   incerementNbLikes(event: Event) {
    return this.events.update(events=>events.map(e=>e.id==event.id?{...e,nbLikes:e.nbLikes+1}:e))
  }

  addToFavorite(event: Event) {
    if (!this.favoriteList().includes(event)) {
      this.favoriteList().push(event);
    }
    return this.favoriteList;
  }


 get filteredEvents() {
    const search = this.item.toLowerCase();

    return this.events().filter(event =>
      event.category.toLowerCase().includes(search)
    );
  }
}
