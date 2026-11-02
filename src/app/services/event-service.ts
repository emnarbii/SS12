import { inject, Injectable, signal } from '@angular/core';
import { Event } from '../models/event';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  http = inject(HttpClient);
  uri = 'http://localhost:3000/events';

  getEventList() {
    return this.http.get<Event[]>(this.uri);
  }

  getEventById(id: number) {
    // return this.http.get(this.uri + "/id")

    return this.http.get<Event>(`${this.uri}/${id}`);
  }

  // add event
  addEvent(event: Omit<Event, 'id'>) {
    return this.http.post<Event>(this.uri, event);
  }
  // update event
  updateEvent(event: Event) {
    return this.http.put<Event>(`${this.uri}/${event.id}`, event);
  }
  // delete event....

  delete(id: number) {
    // return this.http.get(this.uri + "/id")

    return this.http.delete<Event>(`${this.uri}/${id}`);
  }
}
