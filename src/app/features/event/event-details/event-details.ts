import { Component, computed, effect, inject, input, numberAttribute, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Action } from 'rxjs/internal/scheduler/Action';
import { Event } from '../../../models/event';
import { EventService } from '../../../services/event-service';

@Component({
  selector: 'app-event-details',
  imports: [],
  templateUrl: './event-details.html',
  styleUrl: './event-details.css',
})
export class EventDetails {
  idActivatedRoute!: number;
  id = input.required({ transform: numberAttribute });
  eventService = inject(EventService);
  eventD = signal<Event | undefined>(undefined);

  constructor(
    private act: ActivatedRoute,
    private service: EventService,
  ) {
    effect(() => this.eventD.set(this.eventService.getEventById(this.id())));
  } //injector va instancier/ crer l'instance ActivatedRoute act= new ActivatedRoute

  evt = computed(() => this.eventService.getEventById(this.id()));
  ngOnInit() {
    console.log(this.act);
    this.idActivatedRoute = this.act.snapshot.params['id'];

    // console.log( " l id est  ",  this.id());
    // console.log()
  }
}
