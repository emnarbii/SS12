import { Injectable, signal } from '@angular/core';
import { Event } from '../models/event';

@Injectable({
  providedIn: 'root',
})
export class EventService {
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

  getEventList():Event[]{
    return this.events();
  }

  getEventById(id:number){
    return this.events().find(ev=>ev.id===id);
  }

  // add event
  // update event
  // delete event....
}


